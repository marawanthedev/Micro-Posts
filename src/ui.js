class UI {


    constructor() {
        this.post = document.querySelector("#posts");
        this.title = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");



        // forstate
        this.forState = "add";

    }

    showPosts(posts) {

        // output to ui

        let output = ``;

        posts.forEach((post) => {

            output += ` <div class="card mb-3">
            <div class="card-body">
              <h4 class="card-title">${post.title}</h4>
              <p class="card-text">${post.body}</p>
              <a href="#" class="edit card-link" data-id="${post.id}">
                <i class="fa fa-pencil"></i>
              </a>
  
              <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
            </div>
          </div>`
        


        });

        this.post.innerHTML = output;

    }

    showAlert(message, className) {

        this.clearAlert();

        // create div

        const div=document.createElement("div");
        div.className=className;
        

        // addtext
        div.appendChild(document.createTextNode(message));


        const container=document.querySelector(".postsContainer");

        const posts=document.querySelector("#posts");


        container.insertBefore(div,posts)

        // clear aleret
        setTimeout(()=>this.clearAlert(),3000);

    }

    
    // ClearAlert
    clearAlert() {

        const currentAlert=document.querySelector(".alert");

        if(currentAlert){

            currentAlert.remove();
        }


    }
    clearFields() {

        this.title.value = "";
        this.bodyInput.value = "";

    }


    // fill form in edit mode
    fillForm(data){

        // displaying in on input fields

        this.title.value=data.title;
        this.bodyInput.value=data.body;
        this.idInput.value=data.id;

        this.changeFormState("edit");

    }
    
    // clear id Input

    clearIdInput(){

        this.idInput.value="";
    }

    // change form state
    changeFormState(type){

        if(type==="edit"){

            this.postSubmit.textContent="Update Post"
            this.postSubmit.className="post-submit btn btn-warning btn-block";


            // create cancel button

            const button=document.createElement("button");

            button.className="post-cancel btn btn-light btn-block mt-3";

            button.appendChild(document.createTextNode("Cancel Edit"));


            // get parent

            const cardForm=document.querySelector(".card-form");
            
            // get element to insert before

            const formEnd=document.querySelector(".form-end");


            cardForm.insertBefore(button,formEnd);


        }
        else{

            this.postSubmit.textContent="Post it"
            this.postSubmit.className="post-submit btn btn-primary btn-block";

            // remove cancel button
            if(document.querySelector(".post-cancel")){

                document.querySelector(".post-cancel").remove();
            }
            // clear id from hidden field

            this.clearIdInput();

            this.clearFields();

        }
        
    }




}

export const ui = new UI();