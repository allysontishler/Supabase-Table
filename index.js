const books = [
  { title: "The Courage To Be Disliked", author: "Ichiro Kishimi and Fumitake Koga", isbn: "978-1501197277" },
  { title: "Crying in H Mart", author: "Michelle Zauner", isbn: "978-0525657743" },
  { title: "Almond", author: "Sohn Won-Pyung", isbn: "978-0062961372" },
  { title: "I Want to Die but I Want to Eat Tteokbokki: A Memoir", author: "Baek Sehee", isbn: "978-1635579383" },
  { title: "Pachinko", author: "Lee Min Jin", isbn: "978-1455563920" }
];

const bookList = document.getElementById('books');

books.forEach(book => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
  `;
  bookList.appendChild(row);
});