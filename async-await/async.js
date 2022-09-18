// Callback functions/setTimeout
// setTimeout(function () {
//   const banner = document.getElementById("banner");
//   banner.style.backgroundColor = "blue";
//   // console.log("Hello there!");
// }, 2000); //5 second delay toggles background color to blue

 function flipText() {
  const flip = document.getElementById("text").textContent;
  const newText = document.getElementById("alt");
  console.log(flip);
  if (flip === "Async Await Practice") {
     newText === "Funtional Programming!";
  } else {
     newText === "Async Await Practice";
  }
  document.getElementById("button").addEventListener("click", flipText, true)
}
