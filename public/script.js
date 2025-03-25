function fetchBooks() {
    // Example extra books
    const extraBooks = [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            imgSrc: "images/hobbit.jpg",
            link: "hobbit.html"
        },
        {
            title: "A Court of Thorns and Roses",
            author: "Sarah J. Maas",
            imgSrc: "images/acotar.jpg",
            link: "acotar.html"
        }
    ];

    // Get extraBooks container
    let extraBooksContainer = document.getElementById("extraBooks");

    // Check if books are already displayed to prevent duplicates
    if (extraBooksContainer.children.length > 0) {
        extraBooksContainer.style.display = "flex"; // Just make it visible if already populated
        return;
    }

    // Create book cards dynamically
    extraBooks.forEach(book => {
        let bookLink = document.createElement("a");
        bookLink.href = book.link;
        bookLink.className = "book-link";

        let bookCard = document.createElement("div");
        bookCard.className = "book-card";

        let bookImg = document.createElement("img");
        bookImg.src = book.imgSrc;
        bookImg.alt = book.title;

        let bookTitle = document.createElement("p");
        bookTitle.className = "book-title";
        bookTitle.textContent = book.title;

        let bookAuthor = document.createElement("p");
        bookAuthor.className = "book-author";
        bookAuthor.textContent = book.author;

        // Append elements together
        bookCard.appendChild(bookImg);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookLink.appendChild(bookCard);
        extraBooksContainer.appendChild(bookLink);
    });

    // Make the container visible
    extraBooksContainer.style.display = "flex";
}
