const myLibrary = [];

function Book(name, autor, release) {
    this.name = name;
    this.autor = autor;
    this.release = release;
    this.UUID = crypto.randomUUID()
}

function addBookToLibrary(name, autor, release) {

    const book = new Book(name, autor, release);

    myLibrary.push(book);
    return myLibrary
}


addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 1937)
addBookToLibrary("Der Marsianer", "Andy Weir", 2011)
addBookToLibrary("1984", "George Orwell", 1949)
addBookToLibrary("Der Herr der Ringe", "J.R.R. Tolkien", 1954)
addBookToLibrary("Die unendliche Geschichte", "Michael Ende", 1979)



for (let i = 0; i < myLibrary.length; i++) {

    const div = document.createElement("div")
    div.classList.add("book-card")

    const nameParagraph = document.createElement("p")
    nameParagraph.textContent = myLibrary[i].name
    div.appendChild(nameParagraph)

    const autorParagraph = document.createElement("p")
    autorParagraph.textContent = myLibrary[i].autor
    div.appendChild(autorParagraph)

    const releaseParagraph = document.createElement("p")
    releaseParagraph.textContent = myLibrary[i].release
    div.appendChild(releaseParagraph)

    document.getElementById("book-container").appendChild(div)

}

