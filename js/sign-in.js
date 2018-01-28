$(document).ready(function(){
    $("#loginbtn").click(function(){
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

        equest.done(function(data) {
            alert("Wellcome to TodoList!\nYou are login!");
            console.log(data);
        });

        request.done(function(data, textStatus, jqXHR) {
            var uid = jqXHR.getResponseHeader("Uid", "");
        });

        request.fail(function(jqXHR, textStatus) {
            console.log("error");
        });
    });
    
    $("#cancelbtn").click(function() {
        window.location.href = "./index.html";
    });
});