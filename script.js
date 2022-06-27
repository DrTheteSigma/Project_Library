const right = document.querySelector(".right")

let myLibrary = [];

// object funtion
function Book(bkname, authname, pgnum,rdstatus) {
    this.bkname = bkname
    this.authname = authname 
    this.pgnum =  pgnum 
    this.rdstatus = rdstatus 
    this.changestatus = function(){
      if(this.rdstatus == true){
        this.rdstatus=false
      }else{
        this.rdstatus=true
      }
    }

  }


  // Takes the elements from the form and stores them in an object then adds it to a list
function addBookToLibrary(){
    const bkname = document.getElementById("book-name").value
    const authname = document.getElementById("author").value
    const pgnum = document.getElementById("pages").value
    const rdstatus = document.getElementById("read-status").checked
    const item = new Book(bkname,authname,pgnum,rdstatus)

    myLibrary.push(item)
    console.log(myLibrary)

}



//this function read the objects from the list

function render(){


  //deletes all the past renders
  while(right.firstChild){
    right.removeChild(right.firstChild);
  }


  for (let index = 0; index < myLibrary.length; index++) {

    //creates all the elements
    const items = document.createElement("div")
    const thebookname = document.createElement("h3")
    const theauthorname = document.createElement("h2")
    const thepagesread = document.createElement("h2")
    const therdstatus = document.createElement("h2")
    const changestatus = document.createElement("button")

    //stores data in the elements
    thebookname.textContent=myLibrary[index].bkname
    theauthorname.textContent=myLibrary[index].authname
    thepagesread.textContent=myLibrary[index].pgnum
   

    // stores the data of the checked box
    if (myLibrary[index].rdstatus==true) {
      therdstatus.textContent="Read"
      
    }else{
      therdstatus.textContent="Not finished reading"
    }


    // ERROR IS HERE
    //I WANT THIS TO PRINT ONLY WHEN THE INNNER BUTTON IS PRESSED
    changestatus.textContent="change status"
    changestatus.addEventListener("click", console.log(index))
    


    items.classList.add("items")
    items.appendChild(thebookname)
    items.appendChild(theauthorname)
    items.appendChild(thepagesread)
    items.appendChild(therdstatus)
    items.appendChild(changestatus)
    
    right.appendChild(items)


  }
}

