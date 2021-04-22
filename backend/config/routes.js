const { Router } = require('express');
const express = require('express')
const routes = express.Router()

//db para teste antes do back-end
let db = [
    {
        id:1, Url: 'https://minix.gq/login',

    }
]

function generateCrypt(){
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0;i<11;i++)
    text =+ possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/new', (req, res, next) => {
    const url = req.body.url
    console.log(url)
    res.send(url)
})


module.exports = routes
