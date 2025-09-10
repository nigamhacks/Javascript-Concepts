//real life restaraunt example:
const kitchenBell = new EventEmitter();

// Waiter (needs specific info)
kitchenBell.on('order-ready', (dish, table) => {
    console.log(`Waiter: Delivering ${dish} to table ${table}`);
});

// Manager (just needs to know something happened)
kitchenBell.on('order-ready', () => {
    console.log(`Manager: Order completed, updating records`);
});

// Chef announces
kitchenBell.emit('order-ready', 'Pasta Carbonara', 7);