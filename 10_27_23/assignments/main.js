function showAll() {
  let $unreadTableBody = $('#unread-table-body');
  let $readTableBody = $('#read-table-body');

  // right now is dummy data (obviously)
  let unreadHtml =
  `<tr>
    <td>dummy number</td>
    <td>dummy title</td>
    <td>dummy author</td>
    <td>dummy year</td>
    <td>
      <button class="btn btn-sm btn-warning">✔️</button>
    </td>
    <td>
      <button class="btn btn-sm btn-success">📝</button>
    </td>
    <td>
      <button class="btn btn-sm btn-danger">X</button>
    </td>
  </tr>`;

  $unreadTableBody.html(unreadHtml)

}

function saveBook() {
  const book = formatBook([...$('inputs')]);
  const totalBooks = Number(localStorage.getItem('totalBooks')) + 1 || 1;
  const storageKey = 'book' + totalBooks;

  localStorage.setItem('totalBooks', totalBooks);
  localStorage.setItem(storageKey, JSON.stringify(book));
  showAll()
}

function formatBook(formEntries) {
  const bookData = {};
  formEntries.forEach((input) => {
    bookData[input.id] = input.value;
  })
  bookData.finished ? bookData.finished = true : bookData.finished = false;
  return bookData;
}

function toggleRead() {
  // sets a 'read' property on the item
  // moves it to the correct display
}
