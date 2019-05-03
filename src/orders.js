import ordersApi from './order-api.js';
const tbody = document.getElementById('orders');

const orders = ordersApi.getAll();

for(let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();

    searchParams.set('name', order.name);
    link.href = 'order.html?' + searchParams.toString();
    link.textContent = order.name;
    nameCell.appendChild(link); 
    tr.appendChild(nameCell);

    const phoneNumberCell = document.createElement('td');
    phoneNumberCell.textContent = order.phoneNumber;
    tr.appendChild(phoneNumberCell);

    const returnCustomerCell = document.createElement('td');
    if(order.returnCustomer === true) {
        returnCustomerCell.textContent = 'yes';
    } 
    if(order.returnCustomer === false) {
        returnCustomerCell.textContent = 'no';
    }
    tr.appendChild(returnCustomerCell);

    tbody.appendChild(tr);

}