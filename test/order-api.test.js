import orderApi from '../src/order-api.js';
const test = QUnit.test;

test('round-trip order', (assert) => {
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