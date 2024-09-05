const signup = require('../controller/signup-controller');
const express = require('express')
const router = express.Router();
module.exports = (app)=>{
    router.post('/create/user',signup);
    app.use(router);
}