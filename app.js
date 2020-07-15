// Book constructor to handle book logic
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// UI constructor to handle UI logic
function UI() {}



// Event Listeners
document.querySelector('#book-form').addEventListener('submit', function(e) {
    console.log('Submitted...');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //     Instantiate a book object
    const book = new Book(title, author, isbn);

    //     Add book to the table
    const ui = new UI();
    ui.addBook(book);
    ui.clearFields();
    e.preventDefault();
});

// Add book to the list
UI.prototype.addBook = function(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href = "#" class = "delete">X</a></td>
`;
    list.appendChild(row);

};
// Clear all the fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('author').value = '';
};