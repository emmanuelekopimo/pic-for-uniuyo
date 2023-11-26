const image: HTMLImageElement = document.querySelector(".small-image")!;
const button: HTMLButtonElement = document.querySelector(".log-in-button")!;
const text: HTMLInputElement = document.querySelector(".entry")!;

button.onclick = () => {
  let url = `https://uniuyo.edu.ng/eportals/admissionsPassports/${text.value}.jpg`;
  image.src = url;
};
