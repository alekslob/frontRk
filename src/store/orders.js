export default{
    state:{
        listOrders: [],  
    },
    mutations:{
        updateListOrders(state, listOrders){
            state.listOrders = []
            var i = 1
            listOrders.forEach(e => {
                const d = {nOrder: i, 
                    table:e.table.name,
                    sum: e.unpaid_sum
                }
                state.listOrders.push(d)
                i++
            });
        }
    },
    actions:{
        async fetchListOrders(state){
            try{
                const response = await fetch("/order_list");
                if (response.status!=200) {
                    const message = await response.text()
                    throw new Error(message);
                }
                const data = await response.json()
                state.commit('updateListOrders', data)
                state.dispatch('setMessage', "норм")
            }
            catch (err) {
                state.dispatch('setMessage', err.message)
                throw err
            }
        }
    },
    getters:{
        getListOrders(state){
            return state.listOrders
        }
    }
}