class Book{
  constructor(title, author, numberpages, readstatus ){
    this.title=title;
    this.author=author;
    this.numberpages=numberpages
    this.readstatus=readstatus
  }
}   

class UI {
  static displayBooks(){
    const StoredBooks = [
      {
        title: "Book one",
        author: "John one",
        numberpages: "1",
        readstatus: "true"
      },
      {
        title: "Book two",
        author: "John two",
        numberpages: "2",
        readstatus: "false"
      }
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
    }
    
    static addBookToList(book){
      
      const rightside = document.querySelector(".right")
      
      const box = document.createElement("div")
      box.classList.add("items")
      box.innerHTML =`<h3>${book.title}</h3> <h2>${book.author}</h2><h2>pages read ${book.numberpages}</h2> <h2>Read stat: ${book.readstatus}</h2> <button>Change status</button> <button>Remove</button> `
      rightside.appendChild(box);
      
    }
  }

// Display the books
 document.addEventListener("DOMContentLoaded", UI.displayBooks)

// Add books
document.querySelector("#formID").addEventListener("submit", (e) =>{
  e.preventDefault()

  const title = document.querySelector("#book-name").value;
  const author = document.querySelector("#author").value;
  const pagesread = document.querySelector("#pages").value;
  const readstat = document.querySelector("#read-status").checked
    const book = new Book(title, author,pagesread,readstat)
    console.log(book)
    UI.addBookToList(book)
})

document.querySelector(".right").addEventListener("click", (e) =>{
  if (e.target.innerHTML=="Remove") {
    e.target.parentElement.remove()

  }
})


document.querySelector(".right").addEventListener("click", (e) =>{
  if (e.target.parentElement.getElementsByTagName('h2')[2].innerHTML=="Read stat: true") {
    e.target.parentElement.getElementsByTagName('h2')[2].innerHTML="Read stat: false"
  
  }else{
    e.target.parentElement.getElementsByTagName('h2')[2].innerHTML="Read stat: true"
    }
})