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

    if (title === '' || author === '' || isbn === '') {
        // Alert
        ui.showAlert('Please fill all the fields', 'error');
    } else {
        // Add book to the list    
        ui.addBook(book);
        ui.showAlert('Book Added to the list', 'success');
        ui.clearFields();

    }

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

// Show alert
UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    //     Get the container and the form
    const form = document.getElementById('book-form');
    const container = document.querySelector('.container');

    // Insert div before the form
    container.insertBefore(div, form);

    //     Remove after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3 * 1000);

};

// Delete book
document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted', 'success');
    e.preventDefault();
});


UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};