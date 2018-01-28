$(document).ready(function() {
    $("#signupbtn").click(function() {
        var lastname_account = $("#last_name").val();
        var firstname_account = $("#first_name").val();
        var email_account = $("#email").val();
        var password_account = $("#password").val();
        var rePassword_account = $("rePassword").val();

        var request = $.ajax({
            type: "POST",
            url: "https://todo-js-be.herokuapp.com/auth",
            crossDomain: true,
            data: {
                "last_name": lastname_account,
                "first_name": firstname_account,
                "email": email_account,
                "password": password_account
            }
        });

        request.done(function(data, textStatus, jqXHR) {
            console.log(data);
            alert("Sign up success");
        });

        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.log("error");
            var error = jqXHR.responseJSON.errors.full_messages.join("\n");
            alert(error);
        });
    });
    
    $("#cancelbtn").click(function() {
        window.location.href = "./index.html";
    });

    $("form#signUpForm").validate( {
        rules: {
            'first_name': {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            'last_name': {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            'email': {
                required: true,
                email: true
            },
            'password': {
                required: true,
                minlength: 8
            },
            'repeat_password': {
                required: true,
                equalTo: "#password"
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