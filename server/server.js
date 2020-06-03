require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({origin: '*'}));
// parse application/json
app.use(bodyParser.json()) 
app.use(require("./routes/index"))

app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto: ", process.env.PORT)
})