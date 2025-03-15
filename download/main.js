

 

    window.onloadTurnstileCallback = function () {
 

  turnstile.render("#myWidget", {
 

window.onloadTurnstileCallback = function () {
 

  turnstile.render('#myWidget', {
 
    sitekey: "0x4AAAAAABA5K1oArqzQYDyq",
 
    callback: function (token) {
 
      console.log(`Challenge Success ${token}`);
 

        setTimeout((){
 

        setTimeout(function() {
 
            document.querySelector(".container").style.display = "flex";
 
            document.getElementById("myWidget").style.display = "none";
 

        }, 2000);
 

            
 

        }, 2000);  
 
    },
 
  });
 
};
