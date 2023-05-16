<template>
    <v-container v-if="loading" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;" >
        <Loading />
    </v-container>
    <v-container v-else style="display: flex; gap: 1em;">
        <Order  v-for="(ord,idx) in $store.getters.getListOrders" :key="idx" :order="ord" />
    </v-container>
</template>

<script>
import Loading from '../components/Loading.vue';
import Order from '../components/Order.vue';
export default{
    name:'ListOrders',
    data:()=>({
        loading: true,
        showMes: false,
        showList: true,
        message: '',
        orders:[]
    }),
    components:{
        Loading,
        Order
    },
    methods:{
        get_list(data){
            var i = 1
            data.forEach(e => {
                const d = {nOrder: i, 
                    table:e.table.name,
                    sum: e.unpaid_sum
                }
                this.orders.push(d)
                i++
            });
        }
    },
    async mounted(){
        try{
            await this.$store.dispatch('fetchListOrders')
            this.loading = false
        }
        catch(err){
            this.loading = true
        }
    }
}
</script>