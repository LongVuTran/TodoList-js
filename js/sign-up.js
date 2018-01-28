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

        request.done(function(data) {
            console.log(data);
        });

        request.fail(function(jqXHR, textStatus) {
            console.log("error");
        });
    });
    
    $("#cancelbtn").click(function() {
        window.location.href = "./index.html";
    });
});