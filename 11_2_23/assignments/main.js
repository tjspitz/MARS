const url = 'https://gorest.co.in/public/v2/users'; // comment out to see Bobo!
// const url = ''; // comment in to see Bobo!

const getData = (target) => {
  return $.ajax({
    url: target,
    method: 'GET',
    data: { key: 'value' },
    dataType: 'json',
  })
};

const formatData = (people) => {
  // sort by asc. id number, just for fun
    // we could write more formatPeople params to sort dynamically!
      // but maybe some other time...
    people.sort((a, b) => a.id - b.id);

    return people.map((person) => {
      return (
        `<tr>
          <td>${person.id}</td>
          <td>${person.name}</td>
          <td>${person.email}</td>
          <td>${person.gender}</td>
          <td>${person.status}</td>
        </tr>`
      );
    });
};

const renderPeople = () => {
  let $selector;
  const errorHtml =
    `<div class="card">
      <div class="card-body">
        <h3>Error</h3>
          <p>
            Bobo here is trying really hard to find your data,
            but so far he is coming up empty. Please accept our apologies.
          </p>
          <iframe
            src="https://giphy.com/embed/yXBqba0Zx8S4"
            width="480"
            height="324"
            frameBorder="0">
          </iframe>
      </div>
    </div>`;

  getData(url)
    .then((data) => {
      return formatData(data);
    })
    .then((snippets) => {
      $selector = $('#emp-data-body');
      snippets.forEach((snippet) => $selector.append(snippet));
    })
    .catch((e) => {
      console.error(e)
      $selector = $('#main-content');
      $selector.append(errorHtml);
    });
};
