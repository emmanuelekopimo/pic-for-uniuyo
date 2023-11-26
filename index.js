"use strict";
const image = document.querySelector(".small-image");
const button = document.querySelector(".log-in-button");
const text = document.querySelector(".entry");
button.onclick = () => {
    let url = `https://uniuyo.edu.ng/eportals/admissionsPassports/${text.value}.jpg`;
    image.src = url;
};
