document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hiddenText = document.getElementById("u");
      hiddenText.style.display = "inline"; 
    }, 0);
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hiddenText = document.getElementById("u1");
      hiddenText.style.display = "flex";
    }, 0);
  });

// 1er commane (cd list)
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hiddenText = document.getElementById("u_r");
      hiddenText.classList.add("line-1");
      hiddenText.classList.add("anim-typewriter-ls")
      hiddenText.style.display = "inline";
    }, 0);
  });

// CD LIST
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hiddenText = document.getElementById("cd_list");
      hiddenText.style.display = "block";
    }, 2500);
  });

// 2nd user root@machine
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var aa = document.getElementById("u2");
      aa.style.opacity = "100%";
    }, 3500);
  });
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var aa = document.getElementById("u3");
      aa.style.opacity = "100%";
    }, 3500);
  });

// user request (cd website/)
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hiddenText = document.getElementById("u_r1");
      hiddenText.classList.add("line-1");
      hiddenText.classList.add("anim-typewriter-website")
      hiddenText.style.display = "inline"; 
    }, 4000); 
  });
  

  console.log("test")

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var aa = document.getElementById("u4");
      aa.style.opacity = "100%"; 
    }, 6500); 
  });
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var bb = document.getElementById("u5");
      bb.style.opacity = "100%"; 
    }, 6500); 
  });

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hiddenText = document.getElementById("u_r2");
      hiddenText.classList.add("line-1");
      hiddenText.classList.add("anim-typewriter-website")
      hiddenText.style.display = "inline"; 
    }, 7000); 
  });

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var cc = document.getElementById("load");
      cc.style.opacity = "100%";
    }, 10500);
    setTimeout(function(){
      window.location.href = 'home.html';
    },11000)
  });

