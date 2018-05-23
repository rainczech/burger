const orm =require("../config/orm.js")

module.exports=function(app) {
    app.get("/", function(req, res){
        orm.allBurgers("burgers",function(response){
            res.render("index", {burgers:response})
        })
    })
    app.post("/api/burgers", function(req, res){
        console.log("Body is " +req.body)
        orm.createOne("burgers", req.body,function(response){
            res.redirect("/")
        })
    })
    app.post('/api/burgers/:id',function(req,res){
        console.log("Body is ", req.body);
        console.log("Params are ", req.params);
      })
};