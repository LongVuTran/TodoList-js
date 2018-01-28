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

// function validateForm() {
//     var x = document.forms["signUpForm"].value;
//     if (x == "") {
//         alert("You must be filled out!");
//         return fasle;
//     }
// }

// $(function() {
//     $("form[name=signUpForm]").validate({
//         rules:{
//             firstname: "required",
//             lastname: "required",
//             email: { 
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//                 minlength: 8
//             },
//         }
//         messages: {
//             firstname: "Please enter your firstname",
//             lastname: "Please enter your lastname",
//             password: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long"
//             },
//             email: "Please enter a valid email address"
//         }
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });
// });