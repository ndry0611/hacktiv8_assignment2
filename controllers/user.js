const data = __dirname + '/../store/db.json';
const fs = require('fs');
const { generateToken } = require('../helper/jwt');

class UserController
{
    static getAll(req,res) {
        let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));
        try {
            res.status(200).json(dataJson.User);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
    static login (req,res) {
        let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));
        try {
            const { username, password } = req.body;
            let data = dataJson.User;
            let user = data.find(obj => obj.username == username);
            if (!user) {
                throw { message: `User ${username} tidak ditemukan` }
            }
            let cekPassword = user.password === password;
            if (!cekPassword) {
                throw { message: 'Password Salah' }
            }
            let payload = {
                id: user.id,
                email: user.email
            }
            const token = generateToken(payload);
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UserController;