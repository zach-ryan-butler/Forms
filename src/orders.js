import ordersApi from './order-api.js';
const tbody = document.getElementById('orders');

const orders = ordersApi.getAll();

for(let i = 0; i < orders.length; i++) {
    const order = orders[i];
    
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = order.name;
    tr.appendChild(nameCell);

    
    const phoneNumberCell = document.createElement('td');
    phoneNumberCell.textContent = order.phoneNumber;
    tr.appendChild(phoneNumberCell);

    
    const returnCustomerCell = document.createElement('td');
    returnCustomerCell.textContent = order.returnCustomer;
    tr.appendChild(nameCell);

    tbody.appendChild(tr);

}