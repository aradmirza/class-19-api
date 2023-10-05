console.log("connected");

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPOST(data));
}


loadData();

function displayPOST(posts) {
 
  let filterPosts = posts.slice(0, 10);

  const postContainer = document.getElementById("post_container");
  for (const post of posts) {
    const { id, title, body } = post;
    const postDIV = document.createElement("div");
    postDIV.classList.add("post");
    postDIV.innerHTML = `
    <h4 class='post-id'>Post ID:${id}</h4>
    <h5>Post Title:${title}</h5>
    <h5>Post Description:${body}</h5>
    `;
    postContainer.appendChild(postDIV);
  }
}