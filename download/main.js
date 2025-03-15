window.onload = function () { 
  turnstile.render('#myWidget', {
    sitekey: "0x4AAAAAABA5K1oArqzQYDyq",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(function() {
        let container = document.querySelector(".container");
        let widget = document.getElementById("myWidget");
        
        if (container && widget) {  
          container.style.display = "flex";
          widget.style.display = "none";
        } else {
          console.log("Fehler: Ein Element wurde nicht gefunden.");
        }
      }, 2000);  
    },
  });
};
