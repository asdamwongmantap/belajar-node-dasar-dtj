const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9898;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//untuk api post by param
app.post("/api",(req,res) => {
    if (req.body.name){
        res.send({
            success: true,
            message: "Halo "+req.body.name+" apa kabar ?"
        })
    }else{
        res.send({
            success: false,
            message: "Parameter name tidak ditemukan"
        })
    }
   
});//hanya bisa diakses dengan metode POST

app.listen(port,() => {
    console.log(`http://localhost:$(port)`)
});
