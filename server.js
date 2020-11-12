
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
app.use(cors())

require('./server/config/mongoose.config')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const Routes = require("./server/routes/team.routes")
Routes(app)
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );