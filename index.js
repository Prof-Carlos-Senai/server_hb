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
app.get('/consultar', async (req,res)=>{
    const reg = await Usuario.findOne({raw: true, where: {id: 1}})
    // console.log(reg)
    // console.log(reg.id)
    // console.log(reg.nome)
    // console.log(reg.idade)

    res.render('consulta', {valor: reg})
})

app.get('/listar', async (req,res)=>{
    const dados = await Usuario.findAll({raw: true})
    // console.log(dados[0].id)
    // console.log(dados[0].nome)
    // console.log(dados[0].idade)


    res.render('lista', {valor: dados})
})

app.get('/', (req,res)=>{
    res.render('home')
})

/* ----------------------------------------------- */
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT} ...`)
    })
}).catch((error)=>{
    console.error('Errro de conexão com o banco de dados'+error)
})
