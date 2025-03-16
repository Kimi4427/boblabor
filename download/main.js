window.onloadTurnstileCallback = function () {
  turnstile.render('#myWidget', {
    sitekey: '0x4AAAAAABA5K1oArqzQYDyq',
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(function () {
        document.querySelector('.container').style.display = 'flex';
        document.getElementById('myWidget').style.display = 'none';
        btn.setAttribute("disabled", true);
        snackbar()
      }, 2000);
    },
  });
};

hcaptcha.render('h-captcha', 
  {
    sitekey: '80cae61a-2fd6-4bf8-bd34-985242f277ca',
    theme: 'dark', // (for example)
    'error-callback': 'onError', 
  });

function snackbar() {
document.getElementById("snackbar").innerHTML = 
"Current page:<br>" + window.location.href;
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
  var yourFunction = function () {
    console.log('hCaptcha is ready.');
    var widgetID = hcaptcha.render('captcha-1', { sitekey: '80cae61a-2fd6-4bf8-bd34-985242f277ca' });
  };


   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }

function onClick(e) {
    e.preventDefault();  // Prevent the default form submission or button action

    // Make sure grecaptcha is ready and execute the reCAPTCHA challenge
    grecaptcha.ready(function() {
        grecaptcha.execute('80cae61a-2fd6-4bf8-bd34-985242f277ca', { action: 'submit' })
        .then(function(token) {
            // Example: You can now send the token to your backend server
            // For example, submitting the token to your server along with form data

            const formData = new FormData(document.querySelector('form')); // Replace with your form element
            formData.append('g-recaptcha-response', token);  // Append the reCAPTCHA token to the form data

            fetch('/your-backend-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response from your backend server here
                console.log('Success:', data);
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
        });
    });
}
