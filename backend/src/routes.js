const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/produtos', ProdutoController.index);
routes.post('/produto/cadastrar', upload.single('imgSrc'), ProdutoController.create);
//routes.update('/alterar/:id', ProdutoController.update);
//routes.delete('/apagar/:id', ProdutoController.delete);

module.exports = routes;