document.addEventListener("DOMContentLoaded", function () {
    initTurnstile();
    initHCaptcha();
    initReCaptcha();
});

function initTurnstile() {
    window.onloadTurnstileCallback = function () {
        turnstile.render('#myWidget', {
            sitekey: '0x4AAAAAABA5K1oArqzQYDyq',
            callback: function (token) {
                console.log(`Turnstile Challenge Success: ${token}`);
                enableDownloadButton();
            },
        });
    };
}

function initHCaptcha() {
    window.yourFunction = function () {
        console.log('hCaptcha is ready.');
        hcaptcha.render('h-captcha', {
            sitekey: '80cae61a-2fd6-4bf8-bd34-985242f277ca',
            theme: 'dark',
            'error-callback': 'onError',
        });
    };
}

function initReCaptcha() {
    grecaptcha.ready(function () {
        grecaptcha.execute('6LehM_YqAAAAAOUDwetpCsOdTOUiO8JUjZunV-Ut', { action: 'submit' })
            .then(function (token) {
                console.log(`reCAPTCHA Success: ${token}`);
                enableDownloadButton();
            });
    });
}

function enableDownloadButton() {
    document.getElementById("downloadButton").removeAttribute("disabled");
}

document.getElementById("downloadButton").addEventListener("click", function (e) {
    e.preventDefault();
    showSnackbar("Download wird gestartet...");
});

function showSnackbar(message) {
    let snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.className = "show";
    setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
}
