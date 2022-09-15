// const titles = document.getElementsByClassName("title");
// console.log(titles);

// //grabs the second li span
// const book = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(book);

// //returns a nodelist, no need to convert to an arrary
// const books = document.querySelectorAll("#book-list li .name");
// books.forEach(function (book) {
//   console.log(book.textContent);
// });

// const bookList = document.querySelector("#book-list");
// console.log("The parent node is:", bookList.parentNode);
// console.log("The book-list next sibling is:", bookList.nextSibling);
// console.log("The book-list next element sibling is:", bookList.nextElementSibling);
// console.log("The book-list previous sibling is:", bookList.previousSibling);
// console.log("The book-list previous element sibling is:", bookList.previousElementSibling);

// //previous sibling grabs the header and += adds hell there to the header
// // bookList.previousElementSibling.querySelector("p").innerHTML += "<br/>Hello there!";
// //replaces the header with new content
// // bookList.previousElementSibling.querySelector("p").textContent = "oh Shit!";

// //makes an array from an html collection
// Array.from(titles).forEach(function (item) {
//   console.log(item.textContent);
// });

// //delete books
// const list = document.querySelector("#book-list ul");

// list.addEventListener("click", function(e) {
//   if(e.target.className == "delete") {
//     const li = e.target.parentNode;
//     list.removeChild(li);
//   }
// })

// // Add book
// const addBook = document.querySelector("#add-book");

// addBook.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const value = addBook.querySelector("input", "text").value;
//   console.log(value);

//   //create element
// const li = document.createElement("li");
// const bookName = document.createElement("span");
// const deleteBtn = document.createElement("span");

// //Add textContent
// deleteBtn.textContent = "delete";
// bookName.textContent = value;
// //Append to DOM
// li.appendChild(bookName);
// li.appendChild(deleteBtn);
// list.appendChild(li);
// //Adds classes
// bookName.classList = "name";
// deleteBtn.classList = "delete";

// })

// // grabbing bookName
// // const book2 = document.querySelector("li:nth-child(2) .name");
// // console.log(book2);

// //Change event hide books
// const hideBox = document.querySelector("#hide");
// hideBox.addEventListener("change", function(e) {
//   if(hideBox.checked) {
//     list.style.display = "none";
//   } else {
//     list.style.display = "initial";
//   }
// })

// //Filtering books
// const searchBar = document.querySelector("#search-books");//grabs the form id
// searchBar.addEventListener("keyup", function(e) {
//   const term = e.target.value.toLowerCase();
//   books.forEach(function(book) {
//     const title = book.textContent;
//     if(title.toLowerCase().indexOf(term) != -1) {
//         book.style.display = "block";
//     } else {
//       book.style.display = "none";
//     }
//   })
// })

// //Tabs toggle
// const tabs = document.querySelector(".tabs");
// const panels = document.querySelectorAll(".panel");
// tabs.addEventListener("click", function(e) {
//   if(e.target.tagName == "LI") {
//     const targetPanel = document.querySelector(e.target.dataset.target);
//     panels.forEach(function(panel) {
//       if(panel == targetPanel) {
//         panel.classList.add("active")
//       } else {
//         panel.classList.remove("active");
//       }
//     })
//   }
// })

//Javascript challenges

// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//   if (this.numCopies === 0) {
//     return "Out of stock"
//   } else if (this.numCopies < 10) {
//     return "Low stock"
//   }
//   return "In stock";
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold
// }
// Book.prototype.restock = function(numCopiesStoccked = 5) {
//   this.numCopies += numCopiesStoccked
// }

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get avaiability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }
  sell(numCopiesSold = 5) {
    this.numCopies -= numCopiesSold;
  }
  restock(numCopiesRestocked = 5) {
    this.numCopies += numCopiesRestocked;
  }
}

const FakeBook = new Book("Fake Book ", "Heres Bob", 123919, 5);

console.log(FakeBook.getAvailability());
FakeBook.restock(12);
console.log(FakeBook.getAvailability());
FakeBook.sell(17);
console.log(FakeBook.getAvailability());
