const orderTotal = require('./order-total')

it('Validates result of orderTotal', () => {
    expect(orderTotal({
        items: [
            { name: 'panner butter masala', price: 120, quantity: 1 },
            { name: 'butter roti', price: 30, quantity: 3 },
            { name: 'shipping', price: 40, shipping: true}
        ]
    })).toBe(250)
})

it('Validates quantity of item', ()=> {
    expect(orderTotal({
        items: [
            { name: 'panner butter masala', price: 120},
            { name: 'shipping', price: 40, shipping: true}        
        ]
    })).toBe(0)
})

it('Validates shipping of item', () => {
    expect(orderTotal({
        items: [
            { name: 'panner butter masala', price: 120, quantity: 1},
        ]
    })).toBe(120)
})


