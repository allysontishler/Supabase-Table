import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhndmlpbm55bm9pYmdnZHlleW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzA5MTMsImV4cCI6MjAyNjEwNjkxM30.CORJIYv0RdnkAQqtFj1hLzSyZ40BegrNUxvat9QJXHs'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('title, author, isbn') // Select only the columns you need
    .order('id', { ascending: true }); // Optional: Order the results by 'id'

  if (error) {
    console.error('Error fetching books:', error.message);
    return;
  }

  let bookList = document.getElementById('books');
  // Clear previous content
  bookList.innerHTML = '';

  for (let book of books) {
    // Append new list item for each book
    bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;
  }
}