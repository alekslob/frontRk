<template>
    <div v-if="loading" class="load">
        <Loading />
    </div>
</template>

<script>
import Loading from '../components/Loading.vue';
export default{
    name:'ListOrders',
    data:()=>({
        loading: true
    }),
    components:{
        Loading
    },
    async mounted(){
        const response = await fetch("http://127.0.0.1:8000/order_list");
        const data = await response.json();
        if(data!=undefined) this.loading=false
        console.log(data);
    }
}
</script>