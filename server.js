const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/api", function(req, res){
  res.json({
    message: "Hello World!"
  })
});

app.get("*", function(req, res){
  res.redirect("/");
})

app.listen(PORT, function(){
  console.log("App listening on port", PORT);
})
