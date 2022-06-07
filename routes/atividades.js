const { app } = require('../config/servidor')
const atividades = require('../models/atividades')

module.exports = (app)=>{
    app.post('/atividades',async(req,res)=>{
        var dados = req.body
        //console.log(dados)
        const conexao = require('../config/database')()
        const atividades = require('../models/atividades')
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            instrucoes:dados.orientacao,
            Disciplina:dados.materia,
            usuario:dados.id
        }).save()

        var buscar = await atividades.find({usuarios:dados.id})
        //console.log(buscar)
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id,dados:buscar})
    })
}

//excluir atividade
app.get("/excluir",async(req,res)=>{
    var id =req.query.id
    var excluir = await atividades.findOneAndRemove({
        _id:id
    })
    //volta pra pagina atividades
   // res.render('atividades.ejs',{nome:dados.nome,id:dados.id,dados:buscar})
   res.send("atividade excluida")
})