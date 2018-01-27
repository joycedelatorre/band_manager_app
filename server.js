const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// app.get("/api/hello", function(req, res){
// 	res.send("hi");
// })

// app.get("*",function(req, res){
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bandmanager",
  {
    useMongoClient: true
  }
);

app.use(routes);
app.listen(PORT,function(){
	console.log(`🌎 ==> Server now port ${PORT}`);
});