$(document).ready(function() {
    $("#loginbtn").click(function() {
        if ($("#loginForm").valid()) {
            var email_account = $("#email").val();
            var password_account = $("#password").val();

            var request = $.ajax({
                type: "POST",
                url: "http://herokutuan.herokuapp.com/auth/sign_in",
                data: {
                    "email": email_account,
                    "password": password_account
                }
            });

            request.done(function(data, textStatus, jqXHR) {
                var uId = jqXHR.getResponseHeader("Uid");
                var accessToken = jqXHR.getResponseHeader("Access-Token");
                var client = jqXHR.getResponseHeader("Client");

                localStorage.setItem('uId', uId);
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('client', client);

                console.log(localStorage);

                window.location.href = "./home.html";

                alert("Wellcome to TodoList!\nYou are login!");
                console.log(data);
                getTaskTitle();
            });

            request.fail(function(jqXHR, textStatus, errorThrown) {
                console.log("error");
                //var error = jqXHR.responseJSON.errors[0];
                //alert(error);
            });
        }
    });

    //direct to index.html
    $("#cancelbtn").click(function() {
        window.location.href = "./index.html";
    });


    $("#logOutBtn").click(function() {
        console.log(localStorage);
        localStorage.clear();

        window.location.href = "./index.html";
    });
});