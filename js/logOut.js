// $(document).ready(function() {
//     $("#logOutBtn").click(function() {
//         console.log(localStorage);
//         window.location.href = "./index.html";
//     });
//     console.log(localStorage);
//     localStorage.clear();
// });

$(document).on('click', '#logOutBtn', function() {
    console.log(localStorage);
    window.location.href = "./index.html";
    localStorage.clear();
    console.log(localStorage);
});