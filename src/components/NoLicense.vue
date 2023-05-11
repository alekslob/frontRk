<template>
    <v-card>
        <v-card-title class="text-h4">
            Нет лицензии
        </v-card-title>
        <v-card-text class="text--primary">
                Ничего не доступно потому что нет лицензии.<br><br>
                Дата окончания: {{ $store.state.date }}

        </v-card-text>
    </v-card>
</template>

<script>
export default{
    data:()=>({
        // date: this.$store.state.licInfo.expire_date
    })
}
</script>