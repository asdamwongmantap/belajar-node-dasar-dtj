const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9898;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/example_api",(req,res) => {
    res.send({
        success: true,
        message: "api is online"
    })
});

//untuk api by param
app.get("/request_parameter/:name",(req,res) => {
    if (req.params.name){
        res.send({
            success: true,
            message: "Halo "+req.params.name+" apa kabar ?"
        })
    }else{
        res.send({
            success: false,
            message: "Parameter tidak ditemukan"
        })
    }
   
});

app.listen(port,() => {
    console.log(`http://localhost:$(port)`)
});
