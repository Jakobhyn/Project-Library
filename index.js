let myLibrary = [];


// Konstruktor-Funktion: erzeugt ein neues Buch-Objekt mit den übergebenen Werten
function Book(name, autor, release) {
    this.name = name;
    this.autor = autor;
    this.release = release;
    this.UUID = crypto.randomUUID()
}

// Erstellt ein neues Book-Objekt und fügt es dem myLibrary-Array hinzu
function addBookToLibrary(name, autor, release) {

    const book = new Book(name, autor, release);

    myLibrary.push(book);
    return myLibrary
}

// Zeigt alle Bücher aus myLibrary auf der Seite an.
// Wird sowohl beim ersten Laden als auch nach jeder Änderung (z. B. neues Buch) aufgerufen.

function renderBooks() {

    document.getElementById("book-container").textContent = "";

for (let i = 0; i < myLibrary.length; i++) {

    const div = document.createElement("div")
    div.dataset.id = myLibrary[i].UUID;
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

    const deletebutton = document.createElement("button")
    deletebutton.textContent = "Delete"
    div.appendChild(deletebutton)

    deletebutton.addEventListener("click", (event) => {
        const id = event.target.parentElement.dataset.id
        handleDeleteBook(id)
    })

    document.getElementById("book-container").appendChild(div)
}}

function handleDeleteBook(id) {
    myLibrary = myLibrary.filter(book => book.UUID !== id)
    renderBooks()
}


// Wird beim Absenden des "New Book"-Formulars aufgerufen.
// Liest die eingegebenen Werte aus, legt ein neues Buch an und setzt das Formular zurück.

function handleAddBook() {
    const nameInput = document.getElementById("input-name").value
    const autorInput = document.getElementById("input-autor").value
    const releaseInput = document.getElementById("input-release").value

    addBookToLibrary(nameInput, autorInput, releaseInput)

    document.getElementById("book-form").reset()

}

// Richtet alle Event-Listener rund um den "New Book"-Dialog ein
// (Öffnen, Abbrechen, Absenden)

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


