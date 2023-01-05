const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

const salvarProdutos = (produto) => {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

const getProduto = (id) => {
    return produtos[id] || {}
}

const getProdutos = () => {
    return Object.values(produtos)
}

const excluirProduto = (id) => {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProdutos, getProduto, getProdutos, excluirProduto}