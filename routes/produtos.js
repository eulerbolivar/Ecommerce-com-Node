const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// RETORNA OS DADOS DE TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna um produto'
    })
})

// INSERE O DADO DE UM PRODUTO
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?, ?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release(); // NECESSÁRIO PARA LIBERAR AS CONEXÕES

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
            }
        )
    })

    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto
    })
})

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial'){

        res.status(200).send({
            mensagem: 'Você passou um ID especial',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID comum',
            id: id
        })
    }
})

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera o produto'
    })
})

// DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Exclui o produto'
    })
})

module.exports = router