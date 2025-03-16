window.onloadTurnstileCallback = function () {
  turnstile.render('#myWidget', {
    sitekey: '0x4AAAAAABA5K1oArqzQYDyq',
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(function () {
        document.querySelector('.container').style.display = 'flex';
        document.getElementById('myWidget').style.display = 'none';
      }, 2000);
    },
  });
};

hcaptcha.render('h-captcha', // string: ID of target div to render into
  {
    sitekey: '80cae61a-2fd6-4bf8-bd34-985242f277ca',
    theme: 'dark', // (for example)
    'error-callback': 'onError', // (for example) string: name of function
  });
