/*
document.getElementById('sub').addEventListener('click', function(event){
	event.preventDefault();
	var add = document.forms['add'];
	var courierId = add.elements['courierId'].value;
	var courierName = add.elements['courierName'].value;
	var data = {};
	data.courierId = courierName;
	var json = JSON.stringify(data);
	var ajax = new XMLHttpRequest();
	ajax.open('POST', '/couriers');
	ajax.setRequestHeader('Content-Type', 'application/json');
	ajax.addEventListener('load', function(event){
		console.log('процесс пошел');
	});
	ajax.send(json);
})*/

$(document).ready(function(event){
	$.ajax({
		url : '/',
		dataType : 'json',
		method : 'POST',
		data : {q : 0},
		success: function(res){
			console.log(res.data);
			var rows = res.data.rows;
				$('#list').append(rows.map(r => '<li>id: ' + rows + ', name: ' + rows + '</li>'))
		
			
		},
		error: function(res){
			console.log(res);
		},
	})
			
})

$('[name = add]').on('submit', function(event){
	event.preventDefault();
	var Id = $('[name=courierId]').val();
	var Name = $('[name=courierName]').val();

	$.ajax({
		url : '/',
		dataType : 'json',
		method : 'POST',
		data : {
			id: Id,
			name: Name
		},
		success: function(res){
			console.log(res.data);
			var rId = res.id;
			var rName = res.name;
			console.log(names);
			$('#list').append(function(){
				return '<li>id: ' + rId + ', name: ' + rName + '</li>';
			});
								
		
			},
		error: function (res){
			console.log(res);
		},
	})
	console.log(event);
})
