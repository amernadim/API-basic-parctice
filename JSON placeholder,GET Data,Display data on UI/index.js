
function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser2(data));
}

function displayUser2(data){
  const ul= document.getElementById('user-list')
  for(const item of data){
    const li = document.createElement('li');
    li.innerText = item.username;
    ul.appendChild(li);
  }
}

