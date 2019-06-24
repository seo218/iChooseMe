const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

const fileToServePath = path.join(__dirname, '../dist')

app.use(express.static(fileToServePath))

const port = 3000

app.listen(port, () => {
  console.log(`listening on ${port}! printing static file path => ${fileToServePath}`)
})