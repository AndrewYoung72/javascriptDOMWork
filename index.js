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


//delete books
const list = document.querySelector("#book-list ul");

list.addEventListener("click", function(e) {
  if(e.target.className == "delete") {
    const li = e.target.parentNode;
    list.removeChild(li);
  }
})

// Add book
const addBook = document.querySelector("#add-book");

addBook.addEventListener("submit", function(e) {
  e.preventDefault();

  const value = addBook.querySelector("input", "text").value;
  console.log(value);

  //create element
const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

//Add textContent
deleteBtn.textContent = "delete";
bookName.textContent = value;
//Append to DOM
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);


})

