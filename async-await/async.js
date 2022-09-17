// Callback functions/setTimeout
setTimeout(function () {
  const banner = document.getElementById("banner");
  banner.style.backgroundColor = "blue";
  console.log("Hello there!");
}, 5000); //5 second delay toggles background color to blue

function flipText() {
  const flip = document.getElementById("banner").innerHTML;
  console.log(flip);
  if (flip.innerHTML === "<h1>Async Await Practice</h1>") {
    flip.innerHTML === "<h1>Funtional Programming!</h1>";
  } else {
    flip.innerHTML === "<h1>Async Await Practice</h1>";
  }
  document.getElementById("button").addEventListener("click", flipText)
}
