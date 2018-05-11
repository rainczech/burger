const orm = require("../config/orm.js");

// create code that will call the ORM function using specific input for the ORM

let burger = {
    all:function(callback){
        orm.allBurgers("burgers", function(result){
            callback(result);
        });
    },
    create:function(column, values, callback){
        orm.createOne("burgers", column, values, function(result){
            callback(result);
        });
    },
    update:function(condition, column, callback){
        orm.updateOne("burgers", condition, column, callback, function(result){
            callback(result)
        });
    }
};
module.export = burger;