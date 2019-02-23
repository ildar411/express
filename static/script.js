$(document).ready(function(){
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
  				newLi.innerHTML = '<a href=" ">id: ' + res.rows[i].id + ' name: ' + res.rows[i].name + '</a>';

  				list.appendChild(newLi);
		
		};
	},

		error: function(res){
			console.log('ajax error2');
		},
	});
			
});

/*$("#courierId").on('change', function(event){
	id = event.target.value
})

var id = $('#courierId').val();
*/
$('#sub').on('click', function(event){
	event.preventDefault();
	

	var id = $('#courierId').val();
var name = $('#courierName').val();
	event.preventDefault();
	$.ajax({
		method : "POST",
		url : "/couriers",
		data : {'id' : id,
			'name' : name},
		dataType : "json",
		success : function(res){
			console.log(res);
				var id = $('#courierId').val();
				var name = $('#courierName').val();
				var newLi = document.createElement('li');
  				newLi.innerHTML = '<a href=""> id: ' + id + ' name: ' + name + '</a>';
				list.appendChild(newLi);
				console.log('success add string');
		
		
		},

		error: function(res){
			console.log("ajax error1");
		},


	});
});

$('#fsNameCourier').on('click', function(event){
		//$("#searchId").css('display','none');
		//$("#searchName").css('display','inline');
		$("#searchId").hide();
		$("#searchName").show();
	
});	

$('#idCourier').on('click', function(event){
		//$("#searchName").css('display','none');
		//$("#searchId").css('display','inline');
		$("#searchId").show();
		$("#searchName").hide();
	
});	

	