
const express = require('express')
const mygame = require('../controllers/game')
const route =  express.Router()


route.get( '/game', mygame )

module.exports = route;