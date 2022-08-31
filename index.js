const titles = document.getElementsByClassName("title");
console.log(titles);

//grabs the second li span
const book = document.querySelector("#book-list li:nth-child(2) .name");
console.log(book);

//returns a nodelist, no need to convert to an arrary
const books = document.querySelectorAll("#book-list li .name");
books.forEach(function (book) {
  console.log(book.textContent);
});

const bookList = document.querySelector("#book-list");
console.log("The parent node is:", bookList.parentNode);
console.log("The book-list next sibling is:", bookList.nextSibling);
console.log("The book-list next element sibling is:", bookList.nextElementSibling);
console.log("The book-list previous sibling is:", bookList.previousSibling);
console.log("The book-list previous element sibling is:", bookList.previousElementSibling);

//previous sibling grabs the header and += adds hell there to the header
bookList.previousElementSibling.querySelector("p").innerHTML += "<br/>Hello there!";
//replaces the header with new content
// bookList.previousElementSibling.querySelector("p").textContent = "oh Shit!";



//makes an array from an html collection
Array.from(titles).forEach(function (item) {
  console.log(item.textContent);
});


const btns = document.querySelectorAll("#book-list .delete");

Array.from(btns).forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  })
})