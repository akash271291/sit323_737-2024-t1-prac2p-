const express = require("express"); //imports express library

const res = require("express/lib/response"); //imports response module from express library


const app= express(); //creating object or instance of express() function
const addTwoNumber =(n1,n2)=>{ //Defining a new function named addTwoNumber which accepts 2 parameters n1 and n2
    return n1+n2;
}

app.get("/addTwoNumber",(req,res)=> //defining route using app.get() from Express library

{
    const n1=parseInt(req.query.n1); //Fetching the value of n1 from the incoming http request and store that in constant variable n1

    const n2=parseInt(req.query.n2); //Fetching the value of n2 from the incoming http request and store that in constant variable n2
 
    const result=addTwoNumber(n1,n2); //Calling addTwoNumber function by passing n1 and n2 values and storing the result in 'result' variable
   
    res.json({statuscode:200, data: result}) //sending json response to the client side with status code 200
  
});

console.log (addTwoNumber(19,12)); //calling addTwoNumber function and showing/logs the result on the console using console.log

const port =3040; //Defining the port number 3040 to the variable 'port'


app.listen (port, ()=>{ // display the below log message on console confirmin that the server is listening to the port
    console.log("hello I m listening to port"+port);
})