 //getTaskTitle();
 //load all todo title
 function getTaskTitle(data) {
     var requestTitle = $.ajax({
         type: "GET",
         url: "https://herokutuan.herokuapp.com/task_lists",
         headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') },
     });

     requestTitle.done(function(data, textStatus, jqXHR) {
         $('.todoTitleList').html("");
         for (var i = 1; i < data.length - 1; i++) {
             $('.todoTitleList').append('<div class="todoList"><a href="#" class="titeTodo" list-id="' + data[i].id + '">' + data[i].name + '</a><a href="#" class="editTodoList" list-id="' + data[i].id + '"><i class="icon-edit"></i></a><a href="#" class="deleteTodoList" list-id="' + data[i].id + '"><i class="icon-trash"></i></a></div>');
         }
         //$('.todoTitleList').append('<div class="todoList"><a href="#" class="titleTodo" list-id="' + data.id + '">' + data.name + '</a><a href="#" class="editTodoList" list-id="' + data.id + '"><i class="icon-edit"></i></a><a href="#" class="deleteTodoList" list-id="' + data.id + '"><i class="icon-trash"></i></a></div>');

     });

     requestTitle.fail(function() {
         console.log("error");
     });
 }

 function check() {
     var accessToken = localStorage.getItems('accessToken', accessToken);
     var uId = localStorage.getItems('uId', uId);
     var client = localStorage.getItems('client', client);
     if (accessToken === "" || uId === "" || client === "") {
         return false;
     } else {
         return true;
     }
 }

 //  function updatePageTodo() {

 //  }

 //  function updateTodoList() {

 //  }