const data = __dirname + '/../store/db.json';
const fs = require('fs');

class ProductController {
    static getAll(req, res) {
        let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));
        try {
            res.status(200).json(dataJson.Product);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static getOneById(req, res) {
        let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));
        const { id } = req.params;
        try {
            let data = dataJson.Product;
            let product = data.find(obj => obj.id == id);
            res.status(200).json(product);
        } catch(error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = ProductController;