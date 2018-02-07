$(document).ready(function() {
    $('#sign-in').click(function() {
        document.location.href = "./sign-in.html";
    });

    $('#sign-up').click(function() {
        document.location.href = "./sign-up.html";
    });

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
            getTaskTitle();
        });

    });

    $('#cancelbtn').click(function() {
        document.location.href = "./home.html";
    });
});