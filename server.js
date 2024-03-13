var express = require("express"); //imports express library

var app = express(); //creating object or instance of express() function


var port =process.env.port ||3000; //Defining the port number 3000 to the variable 'port'

app.listen(port,()=>{  // display the below log message on console confirmin that the server is listening to the port
    console.log("app listening to: " +port);
  
})