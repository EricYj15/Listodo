//importar o mongoose 
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:1234@ac1-2tri.xb0bm.mongodb.net/test')
}

//exportar as informações para acesso externo
module.exports = conn