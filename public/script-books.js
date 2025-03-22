function filterBooks(category) {
    let books = document.getElementsByClassName('book-card');

    for (let i = 0; i < books.length; i++) {
        let bookCategory = books[i].dataset.category; 
        
        if (category === 'all' || bookCategory === category) {
            books[i].style.display = "flex"; // Make sure flex is used if they are flexbox items
        } else {
            books[i].style.display = "none";
        }
    }
}


function searchBooks() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let books = document.getElementsByClassName('book-card');

    for (let i = 0; i < books.length; i++) {
        let title = books[i].getElementsByClassName('book-title')[0].innerText.toLowerCase();
        let author = books[i].getElementsByClassName('book-author')[0].innerText.toLowerCase();

        if (title.includes(input) || author.includes(input)) {
            books[i].style.display = "flex"; // Again, use flex if needed
        } else {
            books[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging step
});


