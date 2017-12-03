function orderTotal(order) {
    const totalItems = order.items
            .filter(x => !x.shipping)
            .reduce((prev, cur) => prev + (cur.price * cur.quantity || 0), 0)
        const shippingItem = order.items.find(x => !!x.shipping)
        if(!shippingItem || !shippingItem.price) {
            shipping = 0
        } else {
            shipping = (totalItems < 200) ? 0 : shippingItem.price 
        }
        const sum = totalItems + shipping;
        return sum
}

module.exports = orderTotal