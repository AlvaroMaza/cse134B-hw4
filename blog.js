var app = new function() {

  this.el = document.getElementById('posts');

  if (!localStorage.getItem('postsdata')) {
    const myPosts = [['Example 1', '2023-03-14','I hope the code is not awful'],['Example 2', '2023-03-14','Have a good day :)']];
    localStorage.setItem('postsdata', JSON.stringify(myPosts));
  }


  this.posts = JSON.parse(localStorage.getItem('postsdata'));
  
  this.FetchAll = function() {
    var data = '';
    localStorage.setItem('postsdata', JSON.stringify(this.posts));

    if (this.posts.length > 0) {
      for (var i = 0; i < this.posts.length; i++) {
        data += '<tr>';
        data += `<td> <b>Title: </b> ${this.posts[i][0]} <b>Date: </b> ${this.posts[i][1]} <b>Summary: </b> ${this.posts[i][2]}</td>`;
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    var el1 = document.getElementById('add-title');
    var el2 = document.getElementById('add-date');
    var el3 = document.getElementById('add-summary');
    // Get the value
    var post = [DOMPurify.sanitize(el1.value),DOMPurify.sanitize(el2.value),DOMPurify.sanitize(el3.value)];

    if (post) {
      // Add the new value
      this.posts.push(post);
      // Reset input value
      el1.value = '';
      el2.value = '';
      el3.value = '';
      // Dislay the new list
      this.FetchAll();
    }
    document.getElementById('add').close();
  };

  this.Edit = function (item) {
    var el1 = document.getElementById('edit-title');
    var el2 = document.getElementById('edit-date');
    var el3 = document.getElementById('edit-summary');
    // Display value in the field
    el1.value = this.posts[item][0];
    el2.value = this.posts[item][1];
    el3.value = this.posts[item][2];
    // Display fields
    document.getElementById('edit').show();
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var post = [DOMPurify.sanitize(el1.value),DOMPurify.sanitize(el2.value),DOMPurify.sanitize(el3.value)];

      if (post) {
        // Edit value
        self.posts.splice(item, 1, post);
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.posts.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}


function CloseInput() {
  document.getElementById('edit').close();
}

function OpenApp(){
  document.getElementById('add').show();
}

function CloseApp(){
  document.getElementById('add').close();
}


export {app,CloseInput,OpenApp,CloseApp};
