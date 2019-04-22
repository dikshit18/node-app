const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
// const filePath = path.join(__dirname , '../')

//Define Paths for express config
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.get('',(req,res)=>{
    res.render('index',{
        name:'dikshit',
        age:23
    })
})
app.listen(port,()=>{
    console.log('App is running');
})
console.log('Hey');
