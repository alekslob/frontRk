<template>
    <v-card>
        <v-card-title class="text-h4">
            Нет лицензии
        </v-card-title>
        <v-card-text class="text--primary">
                Ничего не доступно потому что нет лицензии.<br><br>
                Дата окончания: {{ $store.getters.getLicenseDate }}

        </v-card-text>
    </v-card>
</template>

<script>
export default{
    data:()=>({
    })
}
</script>