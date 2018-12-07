"use strict";

// immediately invoked function
(function buttonToggle(){
  // create 'array' of elements that have "project-button" class tag
  var totButtons = document.getElementsByClassName("project-button");
  var num;
  // check browser quality
  if (typeof(document.querySelector)==="undefined") {
    return;
  }
  for (num = 0; num < totButtons.length; num++) {
    // event listener on elements in array (project buttons)
    totButtons[num].addEventListener("click", function modifyDisplay() {
      var content = this.nextElementSibling;
      // upon click, if display is not equal to block, set to block (show content)
      if (content.style.display !== "block") {
        content.style.display = "block";
      }
      // upon click, if display is equal to block, set to none (hide content)
      else {
        content.style.display = "none";
      }
    });
  }
})();// end of function
