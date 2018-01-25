// $(document).ready(function() {
//     $("#sign-up").click(function(event) {
//         event.preventDefault();
//         $("#sign-up").load("sign-up.html");
//     });
// });

// $(document).ready(function() {
//     $("#sign-in").click(function(event) {
//         event.preventDefault();
//         $("#sign-in").load("sign-in.html")
//     });
// });


// function loadSignIn(event) {
//     event.preventDefault();
//     console.log("adsd");
//     $("#content").load("./sign-in.html");
// }

function signInPage() {
    document.location.href = "./sign-in.html";
}

function signUpPage() {
    document.location.href = "./sign-up.html";
}