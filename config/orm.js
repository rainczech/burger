const connection = require("./connection.js");

let orm = {
// select all
    allBurgers: function(tableInput, colToSearch, valOfCol){
        let queryString = "SELECT * FROM ?? WHERE ??=?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result){
            if (err) throw err;
            console.log (result);
        });
    },
// insert one


// update one







}

var orm = {
    allParty: function(tableInput, colToSearch, valOfCol){
        var queryString = "SELECT * FROM ?? WHERE ??=?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result){
            if (err) throw err;
            console.log (result);
        });
    },

    
}