const data = __dirname + '/../store/db.json';
const fs = require('fs');
const { verifyToken } = require('../helper/jwt');
let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));

async function authentication(req,res, next) {
    try{
        const token = req.get('token');
        const userDecoded = verifyToken(token);
        const users = dataJson.User;
        const dataUser = users.find(obj => obj.id == userDecoded.id);
        if (!dataUser) {
            return res.status(401).json({message: "User tidak ditemukan"});
        }
        res.locals.user = dataUser;
        return next();
    } catch (error) {
        return res.status(401).json({message: `Anda belum login`});
    }
}

module.exports = authentication;