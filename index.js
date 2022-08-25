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

//makes an array from an html collection
Array.from(titles).forEach(function (item) {
  console.log(item);
});


