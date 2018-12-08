const express = require('express')
const routes = express.Router()
const controllers = require('./app/controllers')
const middlewares = require('./app/middlewares')

// EXEMPLO DE ROTA USANDO O CONTROLLER DE EXEMPLO DE CRIAÇÃO DE USUÁRIO
routes.post('/users', controllers.User.store)

// EXEMPLO DE ROTA USANDO O CONTROLLER DE EXEMPLO DE CRIAÇÃO DE UMA SESSÃO
routes.post('/sessions', controllers.Session.store)

// MIDDLEWARE DE AUTENTICAÇÃO
routes.get('/teste', middlewares.Auth, (req, res) => {
  return res.json({
    ok: true
  })
})

module.exports = routes
