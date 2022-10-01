const cors = require('cors');
const express = require('express');

const app = express();
const port = 4000;

const routers = require('./routers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routers);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});