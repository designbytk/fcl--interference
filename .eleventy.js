const esbuild = require("esbuild")
// const sass = require("sass");
// const path = require("node:path");
// const browserslist = require("browserslist");
// const { transform, browserslistToTargets } = require("lightningcss");
// const { sassPlugin } = require("@henrycatalinismith/11tysass")

// let browserslistTargets = "> 0.2% and not dead";

module.exports = function (eleventyConfig) {

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
  })
	

	// process sass
	// Recognize Sass as a "template languages"
  // eleventyConfig.addTemplateFormats("sass");

  // // Compile Sass and process with LightningCSS
  // eleventyConfig.addExtension("sass", {
  //   outputFileExtension: "css",
  //   compile: async function (inputContent, inputPath) {
  //     let parsed = path.parse(inputPath);
  //     if (parsed.name.startsWith("_")) {
  //       return;
  //     }

  //     let targets = browserslistToTargets(browserslist(browserslistTargets));

  //     let result = sass.compileString(inputContent, {
  //       loadPaths: [parsed.dir || "."],
  //       sourceMap: false,
  //     });

  //     this.addDependencies(inputPath, result.loadedUrls);

  //     return async () => {
  //       let { code } = await transform({
  //         code: Buffer.from(result.css),
  //         minify: true,
  //         sourceMap: false,
  //         targets,
  //       });
  //       return code;
  //     };
  //   },
  // });
	

	// Copy `src/static/` to `dist/`
	// eleventyConfig.addPassthroughCopy({ "src/static/": "/" });
	eleventyConfig.addPassthroughCopy({ "src/img": "/img" });
	eleventyConfig.addPassthroughCopy({ "src/fonts": "/fonts" });

	// pug settings - add eleventy filters to pug
	global.filters = eleventyConfig.javascriptFunctions;
	
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