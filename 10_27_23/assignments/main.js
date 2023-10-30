let checkbox = false;
function toggleCheckbox() {
  checkbox = !checkbox;
}

function getBooks() {
  const books = [];
  let limit = Number(localStorage.getItem('totalBooks')) + 1 || 1;

  while (--limit) {
    books.push(JSON.parse(localStorage.getItem(`book${limit}`)));
  }

  return books;
}

function showAll() {
  const $unreadTableBody = $('#unread-table-body');
  const $readTableBody = $('#read-table-body');
  const books = getBooks();

  const makeHtml = (book) => {
    const prefix =
      `<tr id="${book.storageKey}" class="book">
        <td>${book.storageKey.slice(4)}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>`;
    const unread =
        `<td>
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onclick="toggleRead('${book.storageKey}')"
          >
            &nbsp;&nbsp;&nbsp;
          </button>
        </td>`;
    const read =
        `<td>
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onclick="toggleRead('${book.storageKey}')"
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
          onclick="editModal('${book.storageKey}')"
        >
          📝
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-sm btn-danger"
          onclick="deleteBook('${book.storageKey}')"
        >
        &nbsp;X&nbsp;
        </button>
      </td>
      </tr>`;

    return book.finished ? prefix + read + suffix : prefix + unread + suffix;
  };

  const unreadBooks = books.filter((book) => !book.finished).map(makeHtml).join('');
  const readBooks = books.filter((book) => book.finished).map(makeHtml).join('');

  $unreadTableBody.html(unreadBooks);
  $readTableBody.html(readBooks);
}

function formatBook(formEntries, editKey) { // 'editKey' is undefined for a new book
  const totalBooks = Number(localStorage.getItem('totalBooks'));
  let bookData;

  if (editKey) {
    const oldBook = JSON.parse(localStorage.getItem(editKey));
    bookData = { book: { ...oldBook }, totalBooks: totalBooks };
  } else {
    bookData = { book: {}, totalBooks: null };
    bookData.totalBooks = totalBooks + 1 || 1;
    bookData.book.storageKey = 'book' + bookData.totalBooks;
  }

  formEntries.forEach((input) => {
    bookData.book[input.name] = input.value;
  })

  if (!editKey) {
    bookData.book.finished = checkbox;
  }

  return bookData;
}

function saveBook(formId, editId) { // 'editKey' is undefined for a new book
  const bookData = formatBook([...$(`${formId} input`)], editId);

  localStorage.setItem('totalBooks', JSON.stringify(bookData.totalBooks));
  localStorage.setItem(bookData.book.storageKey, JSON.stringify(bookData.book));
  showAll()
}

function toggleRead(key) {
  const book = JSON.parse(localStorage.getItem(key));
  book.finished = !book.finished;
  localStorage.setItem(key, JSON.stringify(book));
  showAll();
}

function editModal(key) {
  const book = JSON.parse(localStorage.getItem(key));

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
    </form>`

    const btnHtml = `saveBook('#edit-book', '${book.storageKey}')`;

    $('.modal-title').html(`Editing ${book.title}...`);
    $('.modal-body').html(formHtml);
    $('.modal-save').attr("onclick", btnHtml);
}

function deleteBook(key) {
  const keyNum = Number(key.slice(4));
  let decrementKeyBooks = getBooks().filter((book) => Number(book.storageKey.slice(4)) > keyNum);
  const oldTotal = Number(localStorage.getItem('totalBooks'));
  const newTotal = oldTotal - 1;

  decrementKeyBooks = decrementKeyBooks.map((book) => {
    const decKeyBook = { ...book };
    decKeyBook.storageKey = 'book' + (decKeyBook.storageKey - 1);
  });

  decrementKeyBooks.forEach((book) => {
    localStorage.setItem(book.storageKey, JSON.stringify(book));
  })

  localStorage.setItem('totalBooks', JSON.stringify(newTotal));
  localStorage.removeItem(`book${oldTotal}`);
  showAll();
}

$(document).ready(() => showAll())
