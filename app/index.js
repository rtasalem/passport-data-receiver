require('dotenv').config({ path: '../.env' })
const receiveFromQueue = require('./receive-from-queue')

receiveFromQueue()