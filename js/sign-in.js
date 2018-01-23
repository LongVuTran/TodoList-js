$(document).ready(function() {
    $(".signupbtn").click(function() {
        var email_text = $("#email").val();

        var password_text = $("#password").val();

        // goi dien ship do an toi 
        var request = $.ajax({
            url: 'https://todo-js-be.herokuapp.com',
            type: 'POST',
            data: { email: email_text, password: password_text },
            contentType: 'application/json; charset=utf-8'
        });

        // day la cong viec mi se lam khi nhan duoc hang cua shipper :D
        // data la du lieu cua server tra ve, no giong nhu do an duoc chuyen toi 
        request.done(function(data) {
            // your success code here
            console.log(data);
        });

        request.fail(function(jqXHR, textStatus) {
            // your failure code here
        });
    })
});