const express = require('express')
const app = express()
const port = 3003
const bancodeDados = require('./bancoDeDados')


app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.get('/produtos', (req, res) => {
    res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto =  bancodeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto =  bancodeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancodeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(port, () => {
    console.log(`Server executando na porta ${port} :D`);
})