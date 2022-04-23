const express = require('express')
const cors = require('cors')
require('dotenv').config();
const connect = require('./db/connectDB')
const uploadFile = require('./middleware/upload')
const app = express();

const authRoutes = require("./routes/auth")
const proRoutes = require("./routes/product")
const adMinRoutes = require("./routes/admin")

app.use(express.json())
app.use(cors())
connect();
//uploadFile()
app.use('/api/auth',authRoutes)
app.use('/api/product',proRoutes)
app.use('/api/admin',adMinRoutes);
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})

//MOHIT AND MALAY