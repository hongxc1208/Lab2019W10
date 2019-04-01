    var container = document.querySelector(".container");


    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);

    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          console.log("swiped left");
          window.location.href = "07Experience3.html"
    
        } else {
          // swiped right
          console.log("swiped right");
          window.location.href = "05Experience1.html"
        }  
      } 

      initialX = null;
      initialY = null;
      
      e.preventDefault();
    };