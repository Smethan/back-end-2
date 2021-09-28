const express = require('express')
const cors = require('cors')

const app = express();

const controller = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.createHouses)
app.put('/api/houses/:id', controller.updateHouses)
app.delete('/api/houses/:id', controller.deleteHouses)

app.listen(4004, () => console.log("Server is up and running!"))