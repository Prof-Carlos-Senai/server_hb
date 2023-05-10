const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('bd_dad','root','root',{
    host: 'localhost',
    dialect: 'mysql',
})

// sequelize.authenticate().then(()=>{
//     console.log('Banco de dados conectado ...')
// }).catch((error)=>{
//     console.error('Não foi possível conectar o banco de dados ...'+error)
// })

module.exports = sequelize