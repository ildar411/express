/*
document.getElementById('sub').addEventListener('click', function(event){
	event.preventDefault();
	var add = document.forms['add'];
	var courierId = add.elements['courierId'].value;
	var courierName = add.elements['courierName'].value;
	var data = {id : 0, name : 0};
	data.id = courierId;
	data.name = courierName;
	var json = JSON.stringify(data);
	var ajax = new XMLHttpRequest();
	ajax.open('POST', '/');
	ajax.setRequestHeader('Content-Type', 'application/json');
	ajax.addEventListener('load', function(event){
		console.log('процесс пошел');
	});
	ajax.send(json);
})
*/
$(document).ready(function(event){
	event.preventDefault();
	$.ajax({
		url : '/couriers',
		dataType : 'json',
		method : 'GET',
		data : {proc : 'going'},
		success: function(res){

			console.log(res.rows);
			console.log(res.rows[0].id);
		
		for (var i = 0; i < res.rows.length; i++) {
		
				var newLi = document.createElement('li');
  				newLi.innerHTML = 'id: ' + res.rows[i].id + ' name: ' + res.rows[i].name;

  				list.appendChild(newLi);
		
		};
	},

		error: function(res){
			console.log('ajax error2');
		},
	});
			
});

$('[name=add]').on('submit', function(event){
	event.preventDefault();
	var id = $('#courierId').val();
	var name = $('#courierName').val();
	var data = {id: id, name: name};
	console.log(data);
	$.ajax({
		method : "POST",
		url : "/couriers",
		data : data,
		dataType : "json",
		success : function(res){
			console.log(res);
		},
	/*success: [function(res){
			var id = res.id;
			var name = res.name;
			$('#list').append(function(){
				return "<li> id: " + id + "name: " + name + "</li>"; 
			})
		},
		function(res){
			//var obj = res.rows;
			$('#list').append(res.rows.map(r => '<li>id: ' + res.rows.id + ', name: ' + res.rows.name + '</li>'))
		
		}],*/
		error: function(res){
			console.log("ajax error1");
		},


	});
	$('[name=add').on('submit', function(event){
		event.preventDefault();
		var id = $('#courierId').val();
		var name = $('#courierName').val();
		var newLi = document.createElement('li');
  		newLi.innerHTML = 'id: ' + Id + ' name: ' + Name;
		list.appendChild(newLi);
		console.log('success');
		},
	})
});
	