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


addBookToLibrary("23312", "32132", 2004)
addBookToLibrary("2232333312", "123123", 24404)


console.log(myLibrary);