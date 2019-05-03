import getOrderForm from './get-Order-Form.js';

const form = document.getElementById('place-order');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const orderForm = getOrderForm(formData);
    
    console.log(orderForm);

});