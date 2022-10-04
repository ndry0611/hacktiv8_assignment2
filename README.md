# Set Up
node_modules is in `.gitignore`<br>
please run `npm install` first.<br>

# Server
Running Port : 4000<br>
Routes available :<br>
```js
// Global
GET ('/users') -> untuk melihat user dan password yang tersedia
POST ('/login') -> untuk mengambil token

// Need authentication & authorization
GET ('/products') -> getAllProducts
GET ('/products/id') -> getProductsById
```

# Credentials
Untuk login memerlukan `username` dan `password` yang dapat diambil dari `/users`