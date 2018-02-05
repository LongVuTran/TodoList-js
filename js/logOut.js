$(document).ready(function() {
	$("#logOutBtn").click(function() {		
		console.log(localStorage);
		window.location.href = "./index.html";
	});
	console.log(localStorage);
	localStorage.clear();
});
