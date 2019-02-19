const express = require('express');
const bodyParser = require('body-parser');
const path =require('path');
var mysql = require('mysql');



const app = express();
var con = mysql.createPool({
	connectionLimit : 100,
	host : 'localhost',
	user : 'test',
	password : '1',
	database : 'veryfood_pc_cour',
	debug : true,
});
app.use(express.static( __dirname + '/static'));
const urlParser = bodyParser.urlencoded({extended : false});
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.get('/couriers', urlParser, function(request, response){
	response.

});*/

app.post('/api', function(request, response){
		
	var id = request.body.id;
	var name = request.body.name;
	console.log('!!!!!!!!!!!!!!!!!' + id + name);
	con.getConnection(function(err, conn) {
  			if (err) {
  				response.status(500);
  				response.json({
  					error: err.toString()
  				})
  			}
  			else {
  					
	//var id = request.body.id;
	//var name = request.body.name;
	console.log('!!!!!!!!!!!!!!!!!' + id + name);
	
  			conn.query(mysql.format('insert into couriers (id, name) values (?, ?)', [id, name]), function(err, data){
  				if (err) {console.log('ошибка mysql');}
  				else {console.log('success');};
  				
  				response.json({
		  			err: err,
		  			data: data,
		  			});
		  		conn.release();
  				});
  		};
  	});
});
app.get('/api', function(request, response){


  		con.getConnection(function(err, conn)
		{ if(err) {
			response.status(500);
			response.json({ error : err.toString()})
		}
		else {
			conn.query('select * from couriers', function(err, rows){
  				var obj = rows;
  				conn.release();
		  		response.json({
		  			//err: err,
		  			rows : obj,
		  		});
  			}); 

	  		};
	  	});
  	});

   			


/*app.get('/couriers_transfers', function(request,  response){

});

app.post('/couriers_transfers', function(request, response){

});*/
app.listen(3000, function(err){
	if (err) throw console.log(err); 
	console.log('запуск');
});