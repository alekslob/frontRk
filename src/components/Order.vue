<template>
    <v-card   
    >
        <v-card-title>
            Заказ №{{ order.nOrder }}
        </v-card-title> 
        <v-card-subtitle>
            Стол: {{ order.table }}<br>
            Сумма: {{ order.sum }}
        </v-card-subtitle>   
    </v-card>
</template>

<script>
export default{
    props:{
        order:{
            default:{
                nOrder: 0, 
                table:0,
                sum: 0
            }
        }
    }
}
</script>