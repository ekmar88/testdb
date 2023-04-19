import express from 'express'
import { ConnectDB } from './db.js'

// Server variables 
const APP = express()
const PORT = process.env.PORT || 3000


// DB on 
ConnectDB()

// Server on
APP.listen(PORT, () => console.log('server listen on ' + PORT))