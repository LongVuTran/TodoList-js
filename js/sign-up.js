$(document).ready(function() {
    $("#signupbtn").click(function() {
        if ($("#signUpForm").valid()) {
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
        }
    });
    
    $("#cancelbtn").click(function() {
        window.location.href = "./index.html";
    });
});