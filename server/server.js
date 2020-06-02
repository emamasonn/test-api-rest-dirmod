const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Axios = require('axios')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


process.env.URL_KEY = process.env.URL_KEY || '4469|pMQOWBby^qYs0rbPkOn53aa^9SnSb6UM'
process.env.PORT = process.env.PORT || 3000
process.env.URL_BASE = process.env.URL_BASE || 'https://api.cambio.today/v1/quotes' 

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

app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto: ", process.env.PORT)
})