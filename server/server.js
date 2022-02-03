const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config({ path: './config/.env' })

// middleware
app.use(express.json())
app.use(cors())

//ROUTES//
app.use('/api/auth', require('./routes/jwtAuth'))
app.use('/api/dashboard', require('./routes/dashboard'))

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT "+process.env.PORT)
})