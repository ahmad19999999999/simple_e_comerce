module.exports = function (order, client, products) {
    return {
        'id': order.id,
        'order_number': order.order_number,
        'order_total': order.order_total,
        'order_note': order.order_note,
        'type_delivery': order.type_delivery,
        'delivery_charge': order.delivery_charge,
        'ClientId': order.ClientId,
        'CouponId':order.CouponId,
        'status': order.status,
        products:products,
        'client': {
            'id': client.id,
            'fullname': client.firstname + ' ' + client.lastname,
            'email':client.email,
            'phone':client.phone,
            'adress_one':client.adress_one,
            'adress_two':client.adress_two,
        }
    }
}