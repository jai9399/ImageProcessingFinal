const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.resolve('./statics/')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 3000;
app.get('/',function(req,res){
    res.sendFile(path.resolve('./statics/index.html'));
})
app.listen(port,function(){
    console.log('Running');
})