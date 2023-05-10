const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Usuario = require('./models/Usuario')

const PORT = 3000
const hostname = 'localhost'
/* ------------ Config Express ------------------ */
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
/* -----------------Config Handlebars------------- */
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
/* ----------------------------------------------- */



/* ----------------------------------------------- */
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT} ...`)
    })
}).catch((error)=>{
    console.error('Errro de conexão com o banco de dados'+error)
})
