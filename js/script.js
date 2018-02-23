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

});