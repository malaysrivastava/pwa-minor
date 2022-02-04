const express = require('express')
const cors = require('cors')
require('dotenv').config();
const connect = require('./db/connectDB')
const app = express();

const authRoutes = require("./routes/auth")
const proRoutes = require("./routes/product")

app.use(express.json())
app.use(cors())
connect();
app.use('/api/auth',authRoutes)
app.use('/api/product',proRoutes)
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})