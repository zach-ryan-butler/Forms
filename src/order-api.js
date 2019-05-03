const orderApi = {
    save(order) {
        //get our order array
        const orders = orderApi.getAll();
        //add this order to the array
        orders.push(order);
        // serialize to json
        const json = JSON.stringify(orders);
        //save to local storage
        localStorage.setItem('orders', json);
    },
    get() {
        // use get all to get order
        const orders = orderApi.getAll();
        // return it
        return orders[0];
    },
    getAll() {
        // get from local storage
        const json = localStorage.getItem('orders');
        // deserialize to object
        let orders = JSON.parse(json);
        if(!orders) {
            orders = [];
        }
        return orders;  
    }
};

export default orderApi;