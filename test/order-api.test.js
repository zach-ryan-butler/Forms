import orderApi from '../src/order-api.js';
const test = QUnit.test;

const key = 'test-orders';
orderApi.key = key;

test('round-trip order', (assert) => {
    localStorage.removeItem(key);
    //Arrange
    // Set up your parameters and expectations
    const order1 = { name: 'tester1' };
    const order2 = { name: 'tester2' };

    //Act 
    // Call the function you're testing and set the result to a const
    orderApi.save(order1);
    orderApi.save(order2);
    const result = orderApi.get(order2.name);
    //Assert
    assert.deepEqual(result, order2);
});

test('no orders in local storage returns empty array', assert => {
    localStorage.removeItem(key);
    const expected = [];
    
    const orders = orderApi.getAll();
    
    assert.deepEqual(orders, expected);
    
});

test('two saves return array with two items', (assert) => {
    localStorage.removeItem(key);

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