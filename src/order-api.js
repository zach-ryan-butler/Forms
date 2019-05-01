const orderApi = {
    save(order) {

        const json = JSON.stringify(order);
        localStorage.setItem('order', json);
    },
    get() {
        const json = localStorage.getItem('order');
        const order = JSON.parse(json);
        return order;
    }
};

export default orderApi;