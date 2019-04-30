function getOrderForm(formData) {

    //convert data to varibles
    const phoneNumber = parseInt(formData.get('phone-number'));
    const returnCustomer = formData.get('return-customer') === 'Yes';
    const itemNumber = parseInt(formData.get('item-number'));
    const price = parseInt(formData.get('price'));

    //make our object literal
    const orderForm = {
        name: formData.get('name'),
        phoneNumber: phoneNumber,
        returnCustomer: returnCustomer,
        itemNumber: itemNumber,
        itemDescription: formData.get('item-description'),
        price: price
    };
    return orderForm;
}

export default getOrderForm;