const express = require('express')
const app = express()
const connectToDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT || 3000
require('dotenv').config()

// Connect to Database
connectToDB()

//Init middleware
app.use(express.json({ extended: false }))

app.get('/', (_, res) => res.send('Express server started'))

app.use('/api/users', userRoutes)

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
