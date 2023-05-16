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
    }),
    components:{
        Loading,
        Order
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