import orderApi from '../src/order-api.js';
const test = QUnit.test;


test('round-trip order', (assert) => {
    localStorage.removeItem('orders');
    //Arrange
    // Set up your parameters and expectations
    const order = { name: 'tester' };

    //Act 
    // Call the function you're testing and set the result to a const
    orderApi.save(order);
    const result = orderApi.get();
    //Assert
    assert.deepEqual(result, order);
});

test('no orders in local storage returns empty array', assert => {
    localStorage.removeItem('orders');
    const expected = [];
    
    const orders = orderApi.getAll();
    
    assert.deepEqual(orders, expected);
    
});

test('two saves return array with two items', (assert) => {
    localStorage.removeItem('orders');

    //arange
    const order1 = { name: 'tester1' };
    const order2 = { name: 'tester2' };
    const expected = [order1, order2];

    orderApi.save(order1);
    orderApi.save(order2);
    //act
    const orders = orderApi.getAll();
    //assert
    assert.deepEqual(orders, expected);

});