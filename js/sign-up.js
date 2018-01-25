function signUp() {
    var email_account = $("#email").val();
    var password_account = $("#password").val();

    var request = $.ajax({
        type: "POST",
        url: "https://todo-js-be.herokuapp.com/auth",
        crossDomain: true,
        data: {
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
}

// $(document).ready(function() {
//     $("#homePage").load("./index.html");
// });

// $("#cancel").click(function() {
//     console.log("abcasdfads");
//     $("#homePage").load("./index.html");
// });

function cancel(event) {
    document.location.href = "./index.html";
}