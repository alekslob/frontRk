<template>
    <v-card>
        <v-card-text>
            <p class="text-h4 text--primary">Нет лицензии</p>
            <div class="text--primary">
                Ничего не доступно потому что нет лицензии.<br><br>
                Дата окончания: {{ $store.state.date }}
            </div>

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