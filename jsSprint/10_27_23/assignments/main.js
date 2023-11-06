// Upside: CRUD functions are more readable
// Downside: possibly worse on Big-O (would need to verify)
// Maybe: store theBookshelf, aka useState(), to reduce localStorage calls
  // except we're not using React, but the concept ++

function getBooks() {
  return JSON.parse(localStorage.getItem('theBookshelf'));
}

function showAll() {
  const $unreadTableBody = $('#unread-table-body');
  const $readTableBody = $('#read-table-body');
  const books = getBooks();
  const noBooksHtml =
    `<tr>
      <td>There are no books here yet...</td>
    </tr>`;
  let booksHtml;
  let unreadHtml = '';
  let readHtml = '';

  const makeHtml = (book, idx) => {
    const prefix =
      `<tr id="${idx}" class="book">
        <td>${idx + 1}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>`;
    const unread =
        `<td class="unread">
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onclick="toggleRead('${idx}')"
          >
            &nbsp;&nbsp;&nbsp;
          </button>
        </td>`;
    const read =
        `<td class="read">
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onclick="toggleRead('${idx}')"
          >
            ✔️
          </button>
        </td>`;
    const suffix =
      `<td>
        <button
          type="button"
          class="btn btn-sm btn-success"
          data-bs-toggle="modal"
          data-bs-target="#edit-modal"
          onclick="editModal('${idx}')"
        >
          📝
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-sm btn-danger"
          onclick="deleteBook('${idx}')"
        >
        &nbsp;X&nbsp;
        </button>
      </td>
      </tr>`;

    return book.finished ? prefix + read + suffix : prefix + unread + suffix;
  };

  if (books) {
    booksHtml = books.map(makeHtml);

    booksHtml.forEach((snippet) => {
      if (snippet.includes('unread')) {
        unreadHtml += snippet;
      } else {
        readHtml += snippet;
      }
    })
  }

  if (unreadHtml) {
    $unreadTableBody.html(unreadHtml);
  } else {
    $unreadTableBody.html(noBooksHtml);
  }
  if (readHtml) {
    $readTableBody.html(readHtml);
  } else {
    $readTableBody.html(noBooksHtml);
  }
}

function formatBook(entries) {
  const bookData = {};

  entries.forEach((input) => {
    bookData[input.name] = input.value;
  })

  bookData.finished ? bookData.finished = true : bookData.finished = false;
  return bookData;
}

function saveBook(formId, editIdx) { // editIdx is undefined for a new book
  const $data = $(formId).serializeArray();
  const book = formatBook($data);
  const books = JSON.parse(localStorage.getItem('theBookshelf')) || [];

  if (editIdx) { // replace the book
    books[editIdx] = book;
  } else {
    books.push(book);
  }
  localStorage.setItem('theBookshelf', JSON.stringify(books));
  showAll()
  $('button[type=reset]').click()
}

function toggleRead(bookIdx) {
  const books = JSON.parse(localStorage.getItem('theBookshelf'));
  const book = books[bookIdx];
  book.finished = !book.finished;
  localStorage.setItem('theBookshelf', JSON.stringify(books));
  showAll();
}

function editModal(bookIdx) {
  const books = JSON.parse(localStorage.getItem('theBookshelf'));
  const book = books[bookIdx];

  const modalTitle = `Editing ${book.title}...`;
  const formHtml =
    `<form id="edit-book">
      <label for="edit-title">Title:</label>
        <input
          id="edit-title"
          name="title"
          type="text"
          class="form-control"
          value="${book.title}"
        />
      <label for="edit-author">Author:</label>
        <input
          id="edit-author"
          name="author"
          type="text"
          class="form-control"
          value="${book.author}"
        />
      <label for="edit-year">Year:</label>
        <input
          id="edit-year"
          name="year"
          type="text"
          class="form-control"
          value="${book.year}"
        />
        <br>

        <label for="edit-finished">Finished?</label>
        <input
          id="edit-finished"
          name="finished"
          type="checkbox"
        />
    </form>`

    const btnHtml = `saveBook('#edit-book', '${bookIdx}')`;

    $('.modal-title').html(`Editing ${book.title}...`);
    $('.modal-body').html(formHtml);
    $('.modal-save').attr("onclick", btnHtml);
}

function deleteBook(bookIdx) {
  bookIdx = Number(bookIdx);
  const oldBooks = JSON.parse(localStorage.getItem('theBookshelf'));
  const newBooks = oldBooks.filter((book, i) => bookIdx !== i);

  localStorage.setItem('theBookshelf', JSON.stringify(newBooks));
  showAll();
}

$(document).ready(() => {
  // quick customization of background while using Bootstrap
  // comment out if using stylesheet
  $('html').css({
    'background': 'url("https://cdn.wallpapersafari.com/80/0/VsQT7z.jpg") no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  });

  $('body').css('background-color', 'transparent');

  // never comment out
  showAll()
})
