"use strict";
document.getElementById("select-right-heading").style.backgroundColor =
  " antiquewhite";
document.getElementById("select-right-heading").style.border =
  "5px solid antiquewhite";
document.getElementById("select-left-heading").style.backgroundColor =
  " antiquewhite";
document.getElementById("select-left-heading").style.border =
  "5px solid antiquewhite";
document
  .getElementById("left-select-img")
  .addEventListener("click", function () {
    document.getElementById("right-select-img").style.filter =
      "grayscale(100%)";
    document.getElementById("select-right-heading").style.backgroundColor =
      " antiquewhite";
    document.getElementById("select-right-heading").style.border =
      "5px solid antiquewhite";
    document.getElementById("select-left-heading").style.backgroundColor =
      " rgb(210, 241, 210)";
    document.getElementById("select-left-heading").style.border =
      "5px solid rgb(95, 202, 95)";
    document.getElementById("left-select-img").style.filter = "grayscale(0%)";
  });
document
  .getElementById("right-select-img")
  .addEventListener("click", function () {
    document.getElementById("left-select-img").style.filter = "grayscale(100%)";
    document.getElementById("right-select-img").style.filter = "grayscale(0%)";
    document.getElementById("select-left-heading").style.backgroundColor =
      " antiquewhite";
    document.getElementById("select-left-heading").style.border =
      "5px solid antiquewhite";
    document.getElementById("select-right-heading").style.backgroundColor =
      " rgb(210, 241, 210)";
    document.getElementById("select-right-heading").style.border =
      "5px solid rgb(95, 202, 95)";
  });
