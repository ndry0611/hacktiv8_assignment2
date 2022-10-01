const router = require('express').Router();
const UserController = require('../controllers/user');
const ProductController = require('../controllers/product');
const authentication = require('../middleware/auth');

router.get('/users', UserController.getAll);
router.post('/login', UserController.login);

router.use(authentication);

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getOneById);

module.exports = router;