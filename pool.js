var pool = mysql.createPool({
    host: config.database.host,
    connectionLimit: 100,
    user: config.database.user,
    password: config.database.password
});

exports.dbQuery = function dbQuery(query, values, cb){
    pool.getConnection(function(err, conn){
        if (err){
            //conn.release();
            console.log(messages.MYSQL_PREFIX + err.toString());
            cb(err);
        }else{
            //console.log(mysql.format(query,values));
            conn.query(mysql.format(query,values), function dbQueryCallBack(err, data){
                conn.release();
                if (err){
                    cb(err);
                }else{
                    cb(err, data);
                }
            });
        }
    });
};