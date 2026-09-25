import books from "../data/book.js";

function displaySearchResults(results) {
    const booksContainer = document.getElementById("books-container");

    if (!booksContainer) {
        return;
    }

    booksContainer.innerHTML = "";

    if (results.length === 0) {
        booksContainer.innerHTML = `
            <p class="no-results">No books found.</p>
        `;
        return;
    }

    results.forEach(book => {
        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>
                <strong>Status:</strong>
                ${book.available === false ? "Borrowed" : "Available"}
            </p>
        `;

        booksContainer.appendChild(bookCard);
    });
}

function searchBooks() {
    const searchInput = document.getElementById("book-search");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim().toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText)
    );

    displaySearchResults(filteredBooks);
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("book-search");

    if (searchInput) {
        searchInput.addEventListener("input", searchBooks);
    }
});