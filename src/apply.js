import getOrderForm from './get-Order-Form.js';
import orderApi from './order-api.js';

const form = document.getElementById('place-order');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const order = getOrderForm(formData);

    orderApi.save(order);

    window.location = 'thanks.html';
});
