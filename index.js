const express = require('express')
const app = express()

const herois = ["Homem Aranha", "Hulk", "Ms. Marvel"]

//ENDPOINT Listagem de todos os heróis (READ ALL => ][GET])
app.get("/heroes", function(req, res){
    res.send(herois)
})


//ENDPOINT listagem de UM herói (READ SINGLE => [GET])
app.get("/heroes/:id", function(req, res){
    //acessar o parametro de rota ID
    const id = req.params.id

    //pego o item no array
    const umheroi = herois[id]

    //envio o item encontrado como resposta
    res.send(umheroi)
})

//todo o corpo da requisição virá como JSON
app.use(express.json())


//ENDPOINT de criação (CREATE => [POST])
app.post("/heroes", function(req, res){
    res.send(req.body)
})

app.listen(3000)