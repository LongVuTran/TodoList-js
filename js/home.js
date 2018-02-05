//load todo title
function getIdTitle() {
	var requestTitle = $.ajax({
		type: "GET",
		url: "https://todo-js-be.herokuapp.com/todo_lists",
		headers: {
			'access-token': localStorage.getItems('accessToken', accessToken),
			'uid': localStorage.getItems('uId', uId),
			'client': localStorage.getItem('client', client)
		},
		beforSend: function() {
			$('.todoTitleList').html('<div class="spinner"><i class="fas fa-spinner fa-spin"></i>');
		}
	});

	requestTitle.done(function(data, textStatus, jqXHR) {
		for (var i = 0; i < data.length; i++) {
			$('.todoTitleList').append('<div class="todoList"><a href="#" class="titeTodo" list-id="'+ data[i].id + '">'+ data[i].name +'</a> <a href="#" class="editTodoList" list-id="'+ data[i].id +'"><i class="far fa-edit"></i></a> <a href="#" class="deleteTodoList" list-id="'+ data[i].id +'"><i class="far fa-trash-alt"></i></a></div>');
		}
	});

	requestTitle.fail(function() {
		console.log("error");
	});
}

//create todo titel 
$(document).on("click", "#addTitleBtn", fucntion() {
	var listTitle = {name: $('#inputTodoTitle').val()};
	$('#inputTodoTitle').val("");
	var request = $.ajax({
		type: "POST",
		url: "https://todo-js-be.herokuapp.com/todo_lists",
		contentType: 'applycation/json',
		headers: {
			'access-token': localStorage.getItems('accessToken', accessToken),
			'uid': localStorage.getItems('uId', uId),
			'client': localStorage.getItems('client', client)
		},
		data: JSON.stringify(listTitle)
	});
	// request.done(fucntion(data, textStatus, jqXHR) {

	// });
});

fucntion check() {
	var accessToken = localStorage.getItems('accessToken', accessToken);
	var uId = localStorage.getItems('uId', uId);
	var client = localStorage.getItems('client', client);
	if (accessToken === "" || uId === "" || client === "") {
		return false;
	}
	else {
		return true;
	}
}

fucntion updatePageTodo() {

}

function updateTodoList() {
	var id = $
}