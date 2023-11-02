const url = 'https://gorest.co.in/public/v2/users';

const getData = (target) => {
  // fetch the data from https://gorest.co.in/public/v2/users via jQuery ajax
  // return the resolved Promise, an arr of objects (the data we're getting)
};

const formatData = () => {
  // prepare the fetched data
  // return an array of html w/ each el as a complete <tr><td></td>...</tr> string

};

const renderPeople = () => {
  // store getData()
  // map it to an array via formatData()
  // set the table's HTML as either one giant string
    // OR iterate over the formatted data, appending each el to the table
  const $selector = $('#emp-data-body');
  const data = getData(url);
  const formattedData = formatData(data);

  formattedData.forEach((snippet) => $selector.append(snippet));

};
