fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => displayPost(data));

  
  /* 
  1. get the container element where you want to add the new element 
  2. create child element 
  3. set innerText or innerHTML
  4. appendChild or nappend 
  */

    function displayPost(posts){
    const postContainer = document.getElementById('post-conatainer');
     for(const post of posts){
      console.log(post);
      const postDiv = document.createElement('div');
      postDiv.classList.add('post')
      postDiv.innerHTML = `
         <h3>User - ${post.userId} </h3>
         <h4>Post : ${post.title}</h4>
         <p>Post-Discription : ${post.body}</p>        
      `
      postContainer.append(postDiv);
     
     }
  }
