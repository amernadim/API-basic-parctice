function addComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
}
function displayComment(data) {
  const commentFild = document.getElementById("comment-container");
  for (const item of data){
    console.log(item);
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('commentBody');
    commentDiv.innerHTML = `
      <h4 class="name">Name : ${item.name}</h4>
      <h5 class="email">Email : ${item.email}</h5>
      <p class="comment">Comment : ${item.body}</p>
    `;
    commentFild.append(commentDiv)

  }
}

addComment();
