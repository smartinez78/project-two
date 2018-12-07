"use strict";

//immediately invoked function
(function buttonToggle(){
  var totButtons = document.getElementsByClassName("project-button");
  var num;
  // check browser quality
  if (typeof(document.querySelector)==="undefined") {
    return;
  }
  for (num = 0; num < totButtons.length; num++) {
    totButtons[num].addEventListener("click", function modifyDisplay() {
      var content = this.nextElementSibling;
      if (content.style.display !== "block") {
          content.style.display = "block";
      }
      else {
          content.style.display = "none";
      }
    });
  }
})();
