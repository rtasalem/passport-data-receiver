require('dotenv').config({ path: '../.env' })
const receiveAndSendToTopic = require('./receive-and-send')

receiveAndSendToTopic()