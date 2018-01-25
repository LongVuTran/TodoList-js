function signIn() {
    var email_account = $("#email").val();
    var password_account = $("#password").val();

    var request = $.ajax({
        type: "POST",
        url: "https://todo-js-be.herokuapp.com/auth/sign_in",
        // crossDomain: true,
        data: {
            "email": email_account,
            "password": password_account
        }
    });

    request.done(function(data) {
        console.log("success");
        console.log(data);
    });

    request.fail(function(jqXHR, textStatus) {
        console.log("error");
    });
}

// function getSuccessOutput() {
//     $.ajax({
//         type: "POST",
//         url: "https://todo-js-be.herokuapp.com/auth/sign_in",
//         data: {
//             "email": "traoantam@gmail.com",
//             "password": "12345678"
//         },
//         complete: function(response) {
//             $('#output').html(response.responseText);
//         },
//         error: function() {
//             $('#output').html('bummer: there was an error');
//         },
//     });
//     return false;
// }