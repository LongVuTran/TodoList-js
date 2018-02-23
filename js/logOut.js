$(document).on('click', '#logOutBtn', function() {
    console.log(localStorage);
    window.location.href = "./index.html";
    localStorage.clear();
    console.log(localStorage);
});