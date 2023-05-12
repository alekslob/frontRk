<template>
    <div v-if="loading" class="load">
        <Loading />
    </div>
    <div v-else>
        <div v-if="showList" class="d-flex flex-wrap bg-surface-variant" >
            <Order  v-for="(ord,idx) in orders" :key="idx" :order="ord" />
        </div>
        <Message v-if="showMes" :message="message"/>
    </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import Message from '../components/Message.vue';
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
        Message,
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
            const response = await fetch("/order_list");
            const data = await response.json();
            this.loading=false
            if(response.status!=200) throw new Error(data.error_text)
            this.get_list(data)
            
            
        }
        catch (err){
            this.message = err.message
            this.showList= false
            this.showMes = true
        }
    }
}
</script>