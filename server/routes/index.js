const express = require('express')
const app = express()
const Axios = require('axios')

app.get('/cotizacion/dolar', (req, res) => {
    Axios.get(`${process.env.URL_BASE}/USD/ARS/json?quantity=1&key=${process.env.URL_KEY}`)
        .then(response => res.json({
            moneda: 'dolar',
            precio: response.data.result.value
        }))
        .catch(err => res.status(400).json({
            ok: false,
            err
        }))
})


app.get('/cotizacion/euro', (req, res) => {
    Axios.get(`${process.env.URL_BASE}/EUR/ARS/json?quantity=1&key=${process.env.URL_KEY}`)
        .then(response => res.json({
            moneda: 'euro',
            precio: response.data.result.value
        }))
        .catch(err => res.status(400).json({
            ok: false,
            err
        }))
})

app.get('/cotizacion/real', (req, res) => {
    Axios.get(`${process.env.URL_BASE}/BRL/ARS/json?quantity=1&key=${process.env.URL_KEY}`)
        .then(response => res.json({
            moneda: 'real',
            precio: response.data.result.value
        }))
        .catch(err => res.status(400).json({
            ok: false,
            err
        }))
})


module.exports = app;