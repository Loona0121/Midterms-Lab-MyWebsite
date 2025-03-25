document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { // Only trigger on Enter key press
            let query = searchBar.value.trim().toLowerCase();
            let books = document.querySelectorAll(".book-link");

            let found = false;

            books.forEach((book) => {
                let title = book.querySelector(".book-title").innerText.toLowerCase();
                let bookLink = book.getAttribute("href"); // Ensure each book has an href

                if (title.includes(query) && query !== "") {
                    found = true;
                    window.location.href = bookLink; // Redirect to book's page
                }
            });

            if (!found && query !== "") {
                alert("Book not found. Please check the title and try again.");
            }
        }
    });
});
