<template>
    <div>
        <Settings v-for="(item, idx) in $store.state.config"
        :key="idx"
        :title="item.title"
        :listParams="item.settings"/>
    </div>
</template>

<script>
import Settings from '../components/Settings.vue';

export default{
    data:()=>({
    }),
    components:{
        Settings
    },
    methods:{
        async send_settings(){
            await this.$store.dispatch('senfConfig')
            
        }

    },
    async mounted(){
        await this.$store.dispatch('getConfig')
        console.log(this.$store.state.config)
    }
}
</script>
<style>

</style>