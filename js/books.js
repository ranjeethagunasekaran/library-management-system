import books from "../data/book.js";

function displayBooks() {
    const booksContainer = document.getElementById("books-container");

    if (!booksContainer) {
        return;
    }

    booksContainer.innerHTML = "";

    books.forEach(book => {
        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p>
                <strong>Status:</strong>
                ${book.available === false ? "Borrowed" : "Available"}
            </p>
        `;

        booksContainer.appendChild(bookCard);
    });
}

document.addEventListener("DOMContentLoaded", displayBooks);