const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/hello", function(req, res){
	res.send("hi");
})

app.get("*",function(req, res){
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT,function(){
	console.log(`🌎 ==> Server now port ${PORT}`);
});