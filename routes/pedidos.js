const express = require('express')
const router = express.Router()

// RETORNA OS DADOS DE TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'retorna os pedidos'
    })
})

// INSERE O DADO DE UM PEDIDOS
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'o pedido foi criado',
        pedidoCriado: pedido
    })
})

// RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem: 'detalhes do pedido',
        id: id
    })
})

// DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'pedido excluído'
    })
})

module.exports = router