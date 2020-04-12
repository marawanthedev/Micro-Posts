import { http } from "./http"
import { ui } from "./ui"
// Get potst on dom load


document.addEventListener("DOMContentLoaded", getPosts);

// listen for add post

document.querySelector(".post-submit").addEventListener("click", submitPost);

// listen for delete

document.querySelector("#posts").addEventListener("click", deletePost);


//lister for edit state

document.querySelector("#posts").addEventListener("click", enableEditMode);

//add post

// listen for cancel 

debugger
document.querySelector(".card-form").addEventListener("click", cancelEdit);

function submitPost() {


  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector('#id').value;

  console.log(id);


  const data = {

    title,
    body

  }
  // VALIDATE INPUT
  if (title === "" || body === "") {

    ui.showAlert("Please fill all fields", "alert alert-danger")
  }


  else {

    if (id === "") {



      http.post("http://localhost:3000/posts", data)
        .then(data => {

          ui.showAlert("Post Added", "alert alert-success");
          ui.clearFields();

          getPosts();

        })
        .catch(err => console.log(err));
    }
    else {

   


      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {

          ui.showAlert("Post Updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts();

        })
        .catch(err => console.log(err))
    }



  }
}
debugger

//get posts

function getPosts() {

  console.log(`in`)

  // getting the data from db

  http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))



}
function deletePost(e) {

  e.preventDefault();

  if (e.target.parentElement.classList.contains("delete")) {

    const id = e.target.parentElement.dataset.id;


    if (confirm("Are you sure?")) {

      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {

          ui.showAlert("Post Removed", "alert alert-success");
          getPosts();

        })
        .catch(err => console.log(err));

    }

  }



}

// edit mode

function enableEditMode(e) {



  if (e.target.parentElement.classList.contains("edit")) {


    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;


    const data = {

      id,
      title,
      body
    }


    ui.fillForm(data);

  }


  // Fill form with current post



  e.preventDefault();
}

function cancelEdit(e) {

  if (e.target.classList.contains("post-cancel")) {


    ui.changeFormState("add");

  }


  e.preventDefault();
}