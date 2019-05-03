const orderApi = {
    key: 'orders',
    save(order) {
        //get our order array
        const orders = orderApi.getAll();
        //add this order to the array
        orders.push(order);
        // serialize to json
        const json = JSON.stringify(orders);
        //save to local storage
        localStorage.setItem(orderApi.key, json);
    },
    get(name) {
        // use get all to get order
        const orders = orderApi.getAll();
        //loop through object array 
        //if order name matches name in array return order
        for(let i = 0; i < orders.length; i++) {
            const order = orders[i];
            if(order.name === name) {
                return order;
            } 
        }
    },
    getAll() {
        // get from local storage
        const json = localStorage.getItem(orderApi.key);
        // deserialize to object
        let orders = JSON.parse(json);
        if(!orders) {
            orders = [];
        }
        return orders;  
    }
};

export default orderApi;