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

        request.done(function(data, textStatus, jqXHR) {
            var uId = jqXHR.getResponseHeader("Uid");
            var accessToken = jqXHR.getResponseHeader("Access-Token");
            var client = jqXHR.getResponseHeader("Client");
            
            setCookie("uId", uId);
            setCookie("accessToken", accessToken);
            setCookie("client", client);

            alert("Wellcome to TodoList!\nYou are login!");
            console.log(data);
        });

        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.log("error");
            var error = jqXHR.responseJSON.errors[0];
            alert(error);
        });
    });
    
    $("#cancelbtn").click(function() {
        window.location.href = "./index.html";
    });

    $("#loginForm").validate({
        rules: {
            'email': {
                required: true,
                email: true
            },
            'password': {
                required: true,
                minlength: 8
            }
        },

        messages: {
            'first_name': {
                required: "First name must be filled out!"
            },
            'last_name': {
                required: "Last name must be filled out!"
            },
            'email': {
                required: "Email must be filled out!",
                email: "Email is incorect"
            },
            'password': {
                required: "Password must be filled out!",
                minlength: "At least 8 letters"
            },
            'repeat_password': {
                required: "Repeat password must be filled out",
                equalTo: "Repeat password is not direct"
            }
        }
    });
});