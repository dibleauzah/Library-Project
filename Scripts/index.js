let books = [];

const bookTitle = document.getElementById('book-title')

let addBook = (author, title, pages) => {
    const newBook = {author, title,  pages}
    books.push(newBook)
    console.log(bookTitle.value)
    return(books)
}

addBook("Seif", "Cool People", 230)
