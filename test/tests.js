import getOrderForm from '../src/get-Order-Form.js';

const test = QUnit.test;

test('create product form from data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'john',
        phoneNumber: 971,
        returnCustomer: true,
        itemNumber: 33,
        itemDescription: 'is good',
        price: 15
    }

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('phone-number', '971');
    formData.set('return-customer', 'Yes');
    formData.set('item-number', '33');
    formData.set('item-description', expected.itemDescription);
    formData.set('price', '15');

    //Act 
    // Call the function you're testing and set the result to a const
    const orderForm = getOrderForm(formData);
    //Assert
    assert.deepEqual(orderForm, expected);
});