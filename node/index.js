const express = require('express')
const port = process.env.PORT ||3000
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>NodeJS with Docker Demo!!!</h1>')
})

app.listen(port, () => {
    console.log(`Server in running on port ${port}`)
})