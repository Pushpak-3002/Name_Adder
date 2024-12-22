const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes/NameRoutes')

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URL)
    .then(() => console.log(`Connected To MONGODB...`))
    .catch((err) => console.log(err))

app.use(routes)


app.listen(PORT, () => console.log(`listening On .. ${PORT}`))
