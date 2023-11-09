// Form Validation
// FORM validation script
// based on https://pageclip.co/blog/2018-02-20-you-should-use-html5-form-validation.html

// const inputs = document.querySelectorAll('input, select, textarea') --> no textarea used in this form
var inputs = document.querySelectorAll('input, textarea')



// console.log(inputs)


// cycles through each for input - check for html5 validation
inputs.forEach(function (input) {

    function checkValidity(options) {
        const insertError = options.insertError //default false

        if (!input.validity.valid && input.validationMessage) { //check html5 validation on required inputs and select * all required on this form

            if (insertError) { // see addEventListener's below

                input.nextElementSibling.innerHTML = input.validationMessage // adds error message in existing empty <div>
                input.nextElementSibling.classList.add('with-errors')
                input.classList.add('error')

            }
        } else { // reset error message on typing or selecting

            if (input.nextElementSibling) { //check for Sibling

                input.nextElementSibling.innerHTML = ''
                input.nextElementSibling.classList.remove('with-errors')
                input.classList.remove('error')
            }

        }

    }
    if (input.id != 'mobile-menu') {
      input.addEventListener('input', function () {
          // We can only update the error or hide it on input.
          // Otherwise it will show when typing.
          checkValidity({ insertError: false })

      })
    }
    
    input.addEventListener('invalid', function (e) {
        // prevent showing the default display
        e.preventDefault()

        // We can also create the error in invalid.
        checkValidity({ insertError: true })
    })

})


const form_inputs = [
  'name',
  'email',
  'phone',
  'message'
]


const form = document.getElementById('contact-form')
const url = 'https://nqykjrix6h.execute-api.us-east-1.amazonaws.com/dev/email/send'
const feedback = document.querySelector('.message')
const submit = document.querySelector('.submit')

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}

function success() {
  feedback.innerHTML = 'Thank you for sending us a message! We\'ll get in touch with you shortly'
  feedback.scrollIntoView()
  submit.disabled = true
  submit.innerHTML = 'Message Sent'
  
  // reset form text inputs
  form_inputs.forEach((input) => {
    form[input].value = ''
  })

}

function error(err) {
  feedback.innerHTML = 'There was an error with sending your message. Please try again or contact us by email.'
  feedback.scrollIntoView()
  submit.disabled = false
  console.log(err)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  submit.disabled = true

  const payload = createPayload(form)

  post(url, payload, function (err, res) {
    if (err) {
      return error(err)
    }
    success()
  })
})

function createPayload(form) {
  // Setup payload for each page

  console.log(form_inputs)

  var payload = {
    date: (new Date()).toString()
  }

  form_inputs.forEach(input => {
    payload[input] = form[input].value
  })

  console.log(payload)

  return payload
}
