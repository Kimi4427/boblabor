
    window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAABA5K1oArqzQYDyq",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
        setTimeout((){
            document.querySelector(".container").style.display = "flex";
            document.getElementById("myWidget").style.display = "none";
        }, 2000);
            
    },
  });
};
