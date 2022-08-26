//  one type

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */

// Second type

/* const url = ('https://jsonplaceholder.typicode.com/todos/1');
fetch(url)
.then(response => response.json())
.then(json => console.log(json) ) */

// third type

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then(response => response.json())
    .then((json) => console.log(json));
}
