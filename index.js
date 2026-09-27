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

function renderBooks() {

    document.getElementById("book-container").textContent = "";

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
}}

function handleAddBook() {
    const nameInput = document.getElementById("input-name").value
    const autorInput = document.getElementById("input-autor").value
    const releaseInput = document.getElementById("input-release").value

    addBookToLibrary(nameInput, autorInput, releaseInput)

    document.getElementById("book-form").reset()

}

function setupDialogListeners() {
    const dialog = document.getElementById("book-dialog")
    const dialogButton = document.getElementById("new-book-btn")
    const cancelButton = document.getElementById("cancel-btn")

    dialogButton.addEventListener("click", () => {
        dialog.showModal()
    })

    cancelButton.addEventListener("click", () => {
        dialog.close();
    })

    document.getElementById("book-form").addEventListener("submit", (event) => {
        event.preventDefault()
        handleAddBook()
        renderBooks()
        dialog.close()
    })


}

setupDialogListeners();


