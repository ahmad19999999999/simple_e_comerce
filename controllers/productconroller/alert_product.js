
const { Op } = require("sequelize");
const { models: { Product } } = require('../../models');
const { models: { Categories } } = require('../../models');
const path = require("path");


module.exports = {

    alert: async (req, res) => {

        try {
            const page = parseInt(req.query.page) || 1;
            const pageSize = parseInt(req.query.pageSize) || 5;
            const offset = (page - 1) * pageSize;
            const product = await Product.findAndCountAll(
                {
                    offset,
                    limit: pageSize,
                    where: {

                        quantity: { [Op.lte]: 10 },

                    },

                });

            res.status(200).json(product);


        }

        catch (error) {
            console.error();
            res.status(500).json({
                status: "error",
                message: error.message,
            });

        }

    }
}