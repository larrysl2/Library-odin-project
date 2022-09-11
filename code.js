let Library = []; //store book objects

function Book(title,author,pages,read) {
  this.title=title
  this.author=author
  this.pages=pages
  this.read=read
}

function addBookToLibrary() { //add books to the array
  const titleofbook = prompt("What is the title of the book?");
  const authorofbook = prompt("Who is the author of the book?");
  const pagesinbook = prompt("How many pages in the book?");
  const readorunread = prompt("Have you read this before");
  const bookdetails = new Book(titleofbook,authorofbook,pagesinbook,readorunread);
  const description = ("I have " +bookdetails.read +" "+ bookdetails.title +" by "+bookdetails.author+" which is "+bookdetails.pages+" pages.");
  Library[Library.length]=description;
  displaylibrary();
  
}

function displaylibrary(){
    let listofbooks = document.querySelectorAll("#listofbooks");
    listofbooks[0].textContent="";
    for(let i= 0;i<Library.length;i++){
        let list = document.createElement("li");
        let removebutton = document.createElement("button");
        removebutton.classList.add("removebutton");
        removebutton.addEventListener("click",()=>{Library.splice(i,1);
        displaylibrary();});
        list.textContent=Library[i];
        list.appendChild(removebutton);
        removebutton.innerHTML="Remove Book";
        listofbooks[0].appendChild(list);
    }
}

const button = document.querySelector("button");
button.addEventListener("click",addBookToLibrary);
