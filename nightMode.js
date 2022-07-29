"use strict";

const lightButton = document.querySelector(".lightBtn");
const darkButton = document.querySelector(".darkBtn");
const blackButton = document.querySelector(".blackBtn");
const contentContainer = document.querySelector(".container");
const btnGroup = document.querySelector(".btn-group");
const button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (i == 0) {
      contentContainer.style.backgroundColor = "white";
      contentContainer.style.color = "black";
      btnGroup.style.backgroundColor = "#f2f5f6";
      button[i].style.backgroundColor = "white";
      button[i].style.color = "black";
      button[i].style.boxShadow = "none";
      button[1].style.color = "black";
      button[2].style.color = "black";
      button[1].style.backgroundColor = "#f2f5f6";
      button[2].style.backgroundColor = "#f2f5f6";

      // button[2].style.color = "white";
    } else if (i == 1) {
      contentContainer.style.backgroundColor = "#2F2F35";
      contentContainer.style.color = "white";
      btnGroup.style.backgroundColor = "#212225";
      button[i].style.backgroundColor = "#4A4A52";
      button[i].style.color = "white";
      button[i].style.boxShadow = "none";
      button[0].style.color = "white";
      button[2].style.color = "white";
      button[0].style.backgroundColor = "#212225";
      button[2].style.backgroundColor = "#212225";
    } else if (i == 2) {
      contentContainer.style.backgroundColor = "#1C1D22";
      contentContainer.style.color = "white";
      btnGroup.style.backgroundColor = "black";
      button[i].style.backgroundColor = "#1C1D22";
      button[i].style.color = "white";
      button[0].style.color = "white";
      button[1].style.color = "white";
      button[0].style.backgroundColor = "black";
      button[1].style.backgroundColor = "black";
    }
  });
}
