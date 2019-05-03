import orderApi from './order-api.js';

const name = document.getElementById('name');
const phoneNumber = document.getElementById('phone-number');
const returnCustomer = document.getElementById('return-customer');
const itemNumber = document.getElementById('item-number');
const itemDescription = document.getElementById('item-description');
const price = document.getElementById('price');

// get the order name
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

// get our order from the api
const order = orderApi.get(id);

// no applicant? head back to home page
if(!order) {
    window.location = './';
}

name.textContent = order.name;
phoneNumber.textContent = order.phoneNumber;
returnCustomer.textContent = order.returnCustomer;
itemNumber.textContent = order.itemNumber;
itemDescription.textContent = order.itemDescription;
price.textContent = order.price;