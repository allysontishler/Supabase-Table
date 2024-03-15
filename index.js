import { createClient } from '@supabase/supabase-js'

// Supabase initialization
const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhndmlpbm55bm9pYmdnZHlleW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzA5MTMsImV4cCI6MjAyNjEwNjkxM30.CORJIYv0RdnkAQqtFj1hLzSyZ40BegrNUxvat9QJXHs'
const supabase = createClient(supabaseUrl, supabaseKey)

// Function to fetch books from Supabase and populate the HTML table
async function populateTable() {
  try {
    // Fetch data from Supabase
    const { data: books, error } = await supabase
      .from('books')
      .select('title, author, isbn') // Select only the columns you need

    if (error) {
      throw error;
    }

    // Get reference to the table body
    const tableBody = document.getElementById('books');

    // Clear any existing rows
    tableBody.innerHTML = '';

    // Populate the table with data
    books.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

// Call the function to populate the table
populateTable();
