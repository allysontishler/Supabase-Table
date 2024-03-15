import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhndmlpbm55bm9pYmdnZHlleW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzA5MTMsImV4cCI6MjAyNjEwNjkxM30.CORJIYv0RdnkAQqtFj1hLzSyZ40BegrNUxvat9QJXHs'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;
  }
}

getBooks();