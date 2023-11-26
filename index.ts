const image: HTMLImageElement = document.querySelector(".small-image")!;
const button: HTMLButtonElement = document.querySelector(".log-in-button")!;
const text: HTMLInputElement = document.querySelector(".entry")!;
const errorDisplay: HTMLDivElement = document.querySelector(".error")!;

errorDisplay.classList.toggle("show", false);
button.onclick = () => {
  let imageUrl = `https://uniuyo.edu.ng/eportals/admissionsPassports/${text.value}.jpg`;
  errorDisplay.innerHTML = `Network error`;
  fetch(imageUrl)
    .then((response) => {
      // check for success
      if (!response.ok) {
        errorDisplay.innerHTML = `That is not a registered student of the University of Uyo<br>
            <b>Note:</b> Registration No. is case sensitive`;
        throw new Error("Network response was not ok");
      }

      //  check if it is image
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.startsWith("image")) {
        errorDisplay.innerHTML = `That is not a registered student of the University of Uyo<br>
            <b>Note:</b> Registration No. is case sensitive`;
        throw new Error("The URL did not return image");
      }

      // convert to blob
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);

      image.src = blobUrl;
    })
    .catch((error: Error) => {
      errorDisplay.classList.toggle("show", true);
      console.error(error);
    });
};

text.onclick = () => {
  errorDisplay.classList.toggle("show", false);
  console.log("Show");
};
