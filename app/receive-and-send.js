const { delay, ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.ASB_CONN_STR
const queue = process.env.ASB_QUEUE
const sbClient = new ServiceBusClient(connectionString)
const receiver = sbClient.createReceiver(queue)
const topic = process.env.ASB_TOPIC
const subscription = process.env.ASB_SUB
const sender = sbClient.createSender(topic)

const receiveAndSendToTopic = async () => {
  try {
    const handleMessage = async (message) => {
      try {
        await sender.sendMessages({
          body: message.body
        })
        console.log(`New messages have been received from the ${queue}.`)
        console.log(
          `Messages received from queue have been sent to the ${topic}.`
        )
      } catch (error) {
        console.error(error)
      }
    }

    const handleError = async (error) => {
      console.error(error)
    }

    await receiver.subscribe({
      processMessage: handleMessage,
      processError: handleError
    })

    await delay(10000)
  } catch (error) {
    console.error(`Error: ${error}`)
  } finally {
    await receiver.close()
    await sender.close()
    await sbClient.close()
  }
}

module.exports = receiveAndSendToTopic
