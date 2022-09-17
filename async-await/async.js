// Callback functions/setTimeout
setTimeout(function () {
  const banner = document.getElementById("banner");
  banner.style.backgroundColor = "blue";
  console.log("Hello there!");
}, 2000); //5 second delay toggles background color to blue

function flipText() {
  document.getElementById("button").addEventListener("click", flipText, true);
  const flip = document.getElementById("text").textContent;
  console.log(flip);
  if (flip === "Async Await Practice") {
    flip === "Funtional Programming!";
  } else {
    flip === "Async Await Practice";
  }
}
