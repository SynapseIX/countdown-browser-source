const express = require('express')
let PORT = process.env.PORT || 3000

const app = express()
app.use(express.static(__dirname + "/public"))
app.listen(PORT, () => console.log(`Application listening on ${PORT}`))
