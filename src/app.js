const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    res.send("Hello world from me")
})
app.use("/hello", (req, res)=>{
    res.send("this is the hello hello page")
})

app.use("/", (req, res)=>{
    res.send("this is the home page")
})


app.listen(3000, ()=>{
    console.log("server is listening successfully to the port number 3000....")
})