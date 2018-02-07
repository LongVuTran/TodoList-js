//show todo title
function getTaskTitle() {
    var requestTitle = $.ajax({
        type: "GET",
        url: "http://herokutuan.herokuapp.com/task_lists",
        headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') },

    });

    requestTitle.done(function(data, textStatus, jqXHR) {
        for (var i = 0; i < data.length; i++) {
            $('.todoTitleList').append('<div class="todoList"><a href="#" class="titeTodo" list-id="' + data[i].id + '">' + data[i].name + '</a> <a href="#" class="editTodoList" list-id="' + data[i].id + '"><i class="far fa-edit"></i></a> <a href="#" class="deleteTodoList" list-id="' + data[i].id + '"><i class="far fa-trash-alt"></i></a></div>');
        }
    });

    requestTitle.fail(function() {
        console.log("error");
    });
}

//button create todo titel 
$(document).on("click", "#addTitleBtn", function() {
    var listTitle = { name: $('#inputTodoTitle').val() };
    $('#inputTodoTitle').val("");
    $.ajax({
        url: "http://herokutuan.herokuapp.com/task_lists",
        method: "POST",
        contentType: 'application/json',
        headers: { 'access-token': localStorage.getItem('accessToken'), 'uid': localStorage.getItem('uId'), 'client': localStorage.getItem('client') },
        data: JSON.stringify(listTitle)
    }).done(function(data, textStatus, jqXHR) {
        window.location.href = "./home.html";
        getTaskTitle();
    });
});

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

function updatePageTodo() {

}

function updateTodoList() {

}