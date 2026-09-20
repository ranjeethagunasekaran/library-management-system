function returnBook(bookId) {
    const books = JSON.parse(localStorage.getItem("books")) || [];

    const book = books.find(book => book.id === bookId);

    if (!book) {
        alert("Book not found.");
        return;
    }

    if (book.available) {
        alert("This book is already available.");
        return;
    }

    book.available = true;

    localStorage.setItem("books", JSON.stringify(books));

    alert(`"${book.title}" has been returned successfully.`);
}