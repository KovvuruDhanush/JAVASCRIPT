function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if (drink === 'coffee') {
            resolve('order for coffee');
        } else {
            reject('Other orders are rejected');
        }
    });
}

function processOrder(order) {
    return new Promise(function(resolve) {
        console.log('order is being processed');
        resolve(`${order} is served`);
    });
}

// Using .then() chaining with Promises
// placeOrder('coffee').then(function(orderPlaced) {
//     console.log(orderPlaced);

//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then(function(processedOrder) {
//     console.log(processedOrder);
// }).catch(function(err) {
//     console.log(err);
// });

// Chaining of Promises

// Using Async/Await
async function serveOrder() {
    let orderPlaced = await placeOrder('coffee');
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
}
serveOrder();
