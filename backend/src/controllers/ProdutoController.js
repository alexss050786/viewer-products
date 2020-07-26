const { Produto } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async index(req, res) {
        try {
            const { search = "", order = "descricao" } = req.query;

            const produtos = await Produto.findAll({
                where: {
                    [Op.or]: [
                        {
                            id: { [Op.like]: `%${search}%` }
                        },
                        Sequelize.where(
                            Sequelize.fn('lower', Sequelize.col('descricao')),
                            { [Op.like]: Sequelize.fn('lower', `%${search}%`) }
                        )
                    ]
                },
                order: [order]
            });

            return res.status(200).send(produtos);
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }

    },
    async create(req, res) {
        try {
            console.log(req.file)
            const { filename } = req.file;
            const { id, descricao } = req.body;

            const produtoExist = await Produto.findByPk(id);

            if (produtoExist) {
                return res.status(200).send(produtoExist);
            }

            const produto = await Produto.create({
                id,
                descricao,
                imgSrc: filename
            });

            return res.status(200).send(produto);

        } catch (error) {
            console.log(error)
            return res.status(400).send(error);
        }
    },
    async read(req, res) {

    },
    async update(req, res) {

    },
    async delete(req, res) {

    }
};