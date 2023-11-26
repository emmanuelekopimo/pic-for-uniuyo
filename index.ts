const image: HTMLImageElement = document.querySelector(".small-image")!;
const button: HTMLButtonElement = document.querySelector(".log-in-button")!;
const text: HTMLInputElement = document.querySelector(".entry")!;
const errorDisplay: HTMLDivElement = document.querySelector(".error")!;

errorDisplay.classList.toggle("show", false);
button.onclick = () => {
  let imageUrl = `https://uniuyo.edu.ng/eportals/admissionsPassports/${text.value}.jpg`;
  errorDisplay.innerHTML = `Network error`;

  // Make a request to crossorigin.me to fetch the image
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(imageUrl)}`)
    .then((response) => response.json())
    .then((data) => {
      const contentType = data.status["content_type"];
      console.log(data);
      if (!contentType || !contentType.startsWith("image")) {
        errorDisplay.innerHTML = `That is not a registered student of the University of Uyo<br>
        <b>Note:</b> Registration No. is case sensitive`;
        throw new Error("The URL did not return an image");
      }

      image.src = data.status["url"];
    })
    .catch((error) => {
      image.src = "./images/R.jpg";
      errorDisplay.classList.toggle("show", true);
      console.error("Error fetching and displaying image:", error);
    });
};

text.onclick = () => {
  errorDisplay.classList.toggle("show", false);
  console.log("Show");
};
