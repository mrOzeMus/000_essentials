let path =require('path')
let bodyParser = require('body-parser')


let express = require('express')
let mysql = require('mysql')


let app = express() 
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mydatabase'
})


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

connection.connect(function(err){
    if(err) {
        console.log(`error connection : ${err.stack}`)
    return
    }
       console.log(`connected as id ${connection.threadId}`)
});
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.get('/users', (req, res) => {

    connection.query('SELECT * FROM Users' ,function(err,results){
        if (err) throw err
        console.log(results)
        res.send(results)
    })
})

app.post('/signup', (req, res) => {
    // console.log(req.body.name)
    connection.query(`INSERT INTO Users (name, password) VALUES ('${req.body.name}', '${req.body.password}');`
    , (err)=>{
        if(err) console.log(err) 
        console.log('user added')
    } )
    res.redirect('/')
})



app.listen(4000, ()=>{
    console.log('listening port 4000')
})







// connection.end(function(err){
//     if(err) console.log(err)
//     console.log('connection closed')
// })