module.exports = function (order, client, products) {
    return {
        'id': order.id,
        'order_number': order.order_number,
        'order_total': order.order_total,
        'order_note': order.order_total,
        'type_delivery': order.type_delivery,
        'delivery_charge': order.delivery_charge,
        'clienId': order.clienId,
        products:products,
        'client': {
            'id': client.id,
            'fullname': client.firstname + ' ' + client.lastname,
            'email':client.email,
            'phone':client.phone,
            'address_one':client.address_one,
            'address_two':client.address_two,
        }
    }
}