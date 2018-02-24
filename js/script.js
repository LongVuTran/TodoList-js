$(document).ready(function() {
    //sign in click
    $('#sign-in').click(function() {
        document.location.href = "./sign-in.html";
    });

    //sign up click
    $('#sign-up').click(function() {
        document.location.href = "./sign-up.html";
    });

    //cancel click
    $('#cancelbtn').click(function() {
        document.location.href = "./home.html";
    });

    //getTaskTitle(data);

    //refresh
    $(document).on("click", "#refresh", function() {
        var id = $(this).attr("list-id");
        console.log(id);
    })

    //create title
    $('#addTitle').click(function() {
        // document.location.href = "./snippet/addTitle.html";
        var title = prompt("Nhap title");
        var listTitle = { name: title };
        $('#inputTodoTitle').val("");
        $.ajax({
            url: "http://herokutuan.herokuapp.com/task_lists",
            method: "POST",
            contentType: 'application/json',
            headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') },
            data: JSON.stringify(listTitle)
        }).done(function(data, textStatus, jqXHR) {
            $('.todoTitleList').append('<div class="todoList"><a href="#" class="titleTodo" list-id="' + data.id + '">' + data.name + '</a><a href="#" class="editTodoList" list-id="' + data.id + '"><i class="icon-edit"></i></a><a href="#" class="deleteTodoList" list-id="' + data.id + '"><i class="icon-trash"></i></a></div>');
        });
    });

    //edit title
    $(document).on("click", ".editTodoList", function() {
        var editPrompt = prompt("Edit title:");
        var editTitle = { name: editPrompt };
        var id = $(this).attr("list-id");
        console.log(id);
        $.ajax({
            url: "https://herokutuan.herokuapp.com/task_lists/" + id,
            method: "PATCH",
            contentType: 'application/json',
            headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') },
            data: JSON.stringify(editTitle)
        }).done(function(data, textStatus, jqXHR) {
            //load all task list
            getTaskTitle(data);
        });
    });

    //delete title
    $(document).on("click", ".deleteTodoList", function() {
        var deletePrompt = alert("Do you wanna delete title:");
        var id = $(this).attr("list-id");
        $.ajax({
            url: "https://herokutuan.herokuapp.com/task_lists/" + id,
            method: 'DELETE',
            headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') }
        }).done(function(data, textStatus, jqXHR) {
            getTaskTitle();
        }).fail(function() {
            getTaskTitle();
        });
    });


    //task list

    //show task todo list
    function showTaskTodoList() {
        var listTaskId = $('#inputTaskTodo').attr('list-id');
        $.ajax({
            url: "https://todo-js-be.herokuapp.com/todo_lists/" + listTaskId + "/todos",
            method: 'GET',
            headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') }
        }).done(function(data, textStatus, jqXHR) {
            $('#markDone').html("");
            $('#alreadyDone').html("");
            for (var i = 0; i < data.length; i++) {
                if (data[i].done == false) {
                    $('#markDone').append('<div class="todo-item form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" todo-id="' + data[i].id + '">' + data[i].name + '</label></div>');
                } else {
                    $('#alreadyDone').append('<div class="todo-item form-check"><p><del>' + data[i].name + '</del></p><div class="btn-delete-todo" todo-id="' + data[i].id + '"><i class="far fa-window-close"></i></div></div>');
                }
            }
        });
    }

    //create task todo list
    $(document).on('keypress', '#inputTaskTodo', function() {
        if (event.which === 13) {
            var listTaskId = $(this).attr('list-id');
            var taskTodoName = { name: $(this).val() };
            $(this).val("");
            console.log(listTaskId);
            console.log(taskTodoName);
            $.ajax({
                url: "https://todo-js-be.herokuapp.com/todo_lists/" + listTaskId + "/todos",
                method: 'POST',
                contentType: 'application/json',
                headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') },
                data: JSON.stringify(taskTodoName)
            }).done(function(data, textStatus, jqXHR) {
                console.log(data);
                showTaskTodoList();
            });
        }
    });

});