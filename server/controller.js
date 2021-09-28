const db = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(db)
    },
    deleteHouses: (req, res) => {
        let index = db.findIndex(elem => elem.id === +req.params.id)
        db.splice(index,1)
        res.status(200).send(db)
        houseId--
    },
    createHouses: (req, res) => {
        let {address, price, imageURL} =req.body
        let newHouse = {
            id: houseId,
            address,
            price,
            imageURL
        }
        db.push(newHouse)
        res.status(200).send(db)
        houseId++
    },
    updateHouses: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = db.findIndex(elem => +elem.id === +id)

        if (db[index].price === 0 && type === 'minus') {
            res.status(400).send("can't go below 0")
        } else if (type === 'plus') {
            db[index].price += 10000
            res.status(200).send(db)
        } else if (type === 'minus') {
            db[index].price -= 10000
            res.status(200).send(db)
        } else {
            res.status(400).send("Error")
        }
    },
}