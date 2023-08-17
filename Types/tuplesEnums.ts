// rgbColor can only be an array of 3 numbers
const rgbColor: [ number, number, number ] = [ 0,0,0 ]

// ENUMS - set of named constants that we can reuse throughout our code
enum OrderStatus {
    PENDING,
    ORDERED,
    DELIVERED,
    RETURNED
}

const parcelStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)