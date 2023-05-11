<template>
    <v-card>
        <v-card-title class="text-h4">
            Информация о лицензии:
        </v-card-title>
        <v-card-text class="text--primary">
            <span>
                Можнос посмотреть список открытых заказов.
            </span>
            <span v-if="$store.state.isF1" >
                <br>Можно посмотреть текущие настройки конфигурации.
            </span>
            <span v-if="$store.state.isF2">
                <br>Можно поменять настройки кофнигурации.
            </span>
            <span>
                <br><br>Дата окончания: {{ $store.state.date }}
            </span>

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