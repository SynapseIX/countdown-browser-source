const bodyParser = require('bodyParser')
const express = require('express')

let PORT = process.env.PORT || 3000

const app = express()
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())

// Routes
// app.get('/', function (req, res) {
//   let hours = req.query.hours ? req.query.hours : 24
//   res.send(`Hello Prof ${hours}`)
// })
 
app.listen(PORT, () => console.log(`Application listening on ${PORT}`))
