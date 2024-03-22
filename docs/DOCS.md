# Docs
## Receiving Messages from a Service Bus queue
- Create a `ServiceBusClient` instance.
- Create a receiver by calling the `createReceiver` method on the `ServiceBusClient` instance.
- Define methods to handle a message (`handleMessage`) and to handle an error (`handleError`).
- Subscribe to the queue by calling the `subscribe` method on the receiver. The `subscribe` method takes an object as an arugment. Within this object, two properties need to be defined: `processMessage` and `processError`. These should both be defined using `handleMessage` and `handleError` respectively.
- Lastly, close both the receiver and the Service Bus client.
## Environment Variables (.env)
Similar to the [passport-data-sender](https://github.com/rtasalem/passport-data-sender) project, the `.env` file for this app contain the following:
```
ASB_CONN_STR=
ASB_QUEUE=
```
