const express = require('express');
const fileUpload = require('express-fileupload');
const rootPath = require('app-root-path');
const fs = require('fs');

const app = express();

app.use(fileUpload());
app.use(express.urlencoded({extended:false}))
app.use(express.static('./static'))

app.post('/upload',(req,res)=>{
    if(req.files === null){
        return res.sendFile(`${rootPath.path}/view/warning.html`)
    }
     let file = fs.createWriteStream(`${rootPath}\\uploads\\${req.files.upload.name}`);
    file.end(req.files.upload.data);
    file.on('finish',()=>{
        res.status(200).send('okay')
        console.log('okay');
    })
})
app.get('/finish',(req,res)=>{
    res.sendFile(`${rootPath.path}/view/upload.html`);
})
app.get('/',(req,res)=>{
    res.sendFile(`${rootPath.path}/view/file.html`)
})


app.listen(3000,()=>{
    console.log('app is listening');
})