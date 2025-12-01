import esbuild from "esbuild";
import pugPlugin from "@11ty/eleventy-plugin-pug";
import { sassPlugin } from "esbuild-sass-plugin";

export default function (eleventyConfig) {

	// process bundling for javascript files
	// use esbuild
	eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/main.js'],
      bundle: false,
      sourcemap: false,
      outdir: 'dist/js/'
    	}
    )
		await esbuild.build({
      entryPoints: ['src/sass/main.sass'],
      sourcemap: false,
			minify: true,
			outfile: 'dist/css/main.min.css',
			plugins: [
         sassPlugin({
						// Rewriting relative url(...)s https://github.com/glromeo/esbuild-sass-plugin#--rewriting-relative-urls
						// precompile(source, pathname) {
						// 	const basedir = path.dirname(pathname)
						// 	return source.replace(/(url\(['"]?)(\.\.?\/)([^'")]+['"]?\))/g, `$1${basedir}/$2$3`)
						// }
				 })
			]
		})
  })
	
	// Copy `src/static/` to `dist/`
	// eleventyConfig.addPassthroughCopy({ "src/static/": "/" });
	eleventyConfig.addPassthroughCopy({ "src/static": "/" });
	// eleventyConfig.addPassthroughCopy({ "src/fonts": "/fonts" });

	// pug settings - add eleventy filters to pug
	global.filters = eleventyConfig.javascriptFunctions;

	eleventyConfig.addPlugin(pugPlugin);
  eleventyConfig.setPugOptions({
    globals: ['filters'],
    pretty: true
  });

	return {
		dir: {
			input: "src/11ty/pages",
			output: "dist",
			includes: "../_includes",
			// data: "../_data",
		},
	};
};