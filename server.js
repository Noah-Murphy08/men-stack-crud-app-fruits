//Here is where we import modules
//We begin by loading express
const express = require('express')

const app = express()

//GET '/'
app.get('/', async (req, res) => {
    res.send('Hello, friend')
})





















app.listen(3000, () => {
    console.log('Listening on port 3000')
})