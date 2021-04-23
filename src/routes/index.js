const express = require('express')
const indexRouter = express.Router()
indexRouter.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the PetStore API'}))

export default indexRouter
