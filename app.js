const express = require('express');
const bodyParser = require('body-parser');
const path =require('path');
var mysql = require('mysql');



const app = express();
var con = mysql.createConnection({
	host : 'localhost',
	user : 'test',
	password : '1',
	database : 'veryfood_pc_cour',
});
app.use(express.static(__dirname + '/static'));
//const urlParser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.get('/couriers', urlParser, function(request, response){
	response.

});*/

app.post('/', function(request, response){
	//if(err) throw console.log('ошибка http');
	//console.log(`${request.body.id}`.toString());
	//console.log(`${request.body.name}`.toString());
	let req = request.body;
	con.connect(function(err) {
  			//if (err) throw console.log('шибка подключения');
  			if (err) {
  				response.status(500);
  				response.json({
  					error: err.toString()
  				})
  				return;
  			}
  			var values = {id : req.id, name : req.name};
  			var str_id = req.id;
  			var str_name = req.name;
  			var obj = {};
  			con.query('select id,name from couriers', function(err, rows)
  				{obj = rows;
  					con.query('insert into couriers (id, name) values (?, ?)', [req.id, req.name], function(err, data){
  						if (err) {console.log('ошибка mysql');}
  						else {console.log('success');};
  						response.json({
  							err: err,
  							data: data,
  							id : req.id,
  							name : req.name,
  							rows : obj
  				});
  				//con.end();
  			});});
   			/*
   			con.query("INSERT INTO couriers (id, name ) VALUES (" + str_id + "," + str_name + ")", function (err, data){
    			if (err) {console.log(err);}
    			else {console.log('success')};
  			response.json(data);
  			con.end();
  			});
  			*/

  			


	console.log(req.id);

	});
});

/*app.get('/couriers', jsonParser, function(request, response){
	con.connect(function(err) {
		if(err) throw err;
		let obj = con.query("select * from couriers",function(err, rows){
			if (err) throw console.log(err);
			return rows;});		
			con.end();
		response.json(obj);
			});
	//response.json(obj);

		
	});*/
/*app.get('/couriers_transfers', function(request,  response){

});

app.post('/couriers_transfers', function(request, response){

});*/
app.listen(3000, function(err){
	if (err) throw console.log(err); 
	console.log('запуск');
});