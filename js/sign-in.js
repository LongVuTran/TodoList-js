function signIn() {
    var email_account = $("#email").val();
    var password_account = $("#password").val();

    var request = $.ajax({
        type: "POST",
        url: "https://todo-js-be.herokuapp.com/auth/sign_in",
        data: {
            "email": email_account,
            "password": password_account
        }
    });

    request.done(function(data) {
        alert("Wellcome to TodoList!\nYou are login!");
        console.log(data);
    });

    request.fail(function(jqXHR, textStatus) {
        console.log("error");
    });
}

function cancel(event) {
    document.location.href = "./index.html";
}