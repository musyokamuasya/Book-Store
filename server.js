// ES2015 (ES6 Implementation)
// Just a name to distinguish it from ES5

class Book {
    constructor(title, author, isbn) {
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }
}

class UI {
    addBook(book) {
        const list = document.querySelector('.book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">X</a></td>
    `;
        list.appendChild(row);

    }
    showAlert(message, className) {
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
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
        document.getElementById('author').value = '';
    }

}

// Event Listeners
document.querySelector('#book-form').addEventListener('click', (e) => {
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

// Delete book
document.querySelector('.book-list').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted', 'success');
    e.preventDefault();
});