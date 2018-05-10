const connection = require("./connection.js");

let orm = {
// select all
    allBurgers: function(tableInput, callback){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result){
            if (err) throw err;
            callback(result);
        });
    },
// insert one
    createOne: function(table, column, values, callback){
        let queryString = "INSERT INTO ?? WHERE ?? VALUES ?";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            callback(result);
            
        })
    },

// update one
    updateOne: function(table, condition, column, callback){
        let queryString = "Update ?? SET ? WHERE ??";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            callback(result);
        })
    }
};


module.exports = orm;