const { delay, ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.ASB_CONN_STR
const queue = process.env.ASB_QUEUE
const sbClient = new ServiceBusClient(connectionString)
const receiver = sbClient.createReceiver(queue)

const receiveFromQueue = async () => {
  try {
    const handleMessage = async (message) => {
      console.log(`${message.body}`)
    }

    const handleError = async (error) => {
      console.error(`Error: ${error}`)
    }

    receiver.subscribe({
      processMessage: handleMessage,
      processError: handleError
    })

    await delay(10000)
  } catch (error) {
    console.error(`Error: ${error}`)
  } finally {
    await receiver.close()
    await sbClient.close()
  }
}

module.exports = receiveFromQueue
