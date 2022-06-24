"use strict";

const submit = document.querySelector(".btn");
const asking = document.querySelector(".container--1");
const thanks = document.querySelector(".container--2");
const options = document.querySelectorAll(".option");
const seletion = document.querySelector(".selection");
let rating = "";

//When selecting a value
options.forEach((value, i) => {
  value.addEventListener("click", function () {
    options.forEach((opt) => opt.classList.remove("option--selected"));
    value.classList.add("option--selected");
    rating = value.textContent;
  });
});

//When clicking the submit button
submit.addEventListener("click", function () {
  asking.classList.add("hidden");
  thanks.classList.toggle("hidden");

  seletion.textContent = `You selected ${rating} out of 5`;
});
