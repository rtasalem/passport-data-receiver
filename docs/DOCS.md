# Documentation
## Prerequisites
- Service Bus created on Azure portal. For this application, a queue and topic need to exist within the Service Bus.
## Receiving Messages from a Service Bus queue
- Create a `ServiceBusClient` instance.
- Create a receiver by calling the `createReceiver` method on the `ServiceBusClient` instance.
- Define methods to handle a message (`handleMessage`) and to handle an error (`handleError`).
- Subscribe to the queue by calling the `subscribe` method on the receiver. The `subscribe` method takes an object as an arugment. Within this object, two properties need to be defined: `processMessage` and `processError`. These should both be defined using `handleMessage` and `handleError` respectively.
- Lastly, close both the receiver and the Service Bus client.
## Sending Messages Received from Queue to a Topic
- To send messages to a topic after they have been received from a queue, a sender will need to be created using the name of the Service Bus topic itself. The `sendMessages` method can then be called on the `sender`, passing through the `message.body` to be sent to the topic. This logic was configured within a `try-catch` block for added error handling.
## Environment Variables (.env)
Similar to the [passport-data-sender](https://github.com/rtasalem/passport-data-sender) project, the `.env` file for this app contain the following:
```
ASB_CONN_STR=
ASB_QUEUE=
ASB_TOPIC=
ASB_SUB=
```
Note the `ASB_SUB` variable is there for reference as topics require a subscription.