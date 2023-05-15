<template>
    <v-card>
        <SettingsToolBar 
            :title="title" 
            @changeView="view=!view" 
            @changeEdit="isEditing=!isEditing"/>
        <v-card-text v-if="view">
            <InputField :params="testP" :isEditing="isEditing"/>
        </v-card-text>
        <v-divider></v-divider>
        <SettingsBottomBar
            :view="view"
            :isEditing="isEditing"
        />
    </v-card>
</template>

<script>
import SettingsToolBar from './SettingsToolBar.vue';
import InputField from './InputField.vue';
import SettingsBottomBar from './SettingsBottomBar.vue';

export default{
    data:()=>({
        view: false,
        isEditing: false, 
        // testP: {
        //         name:'Адрес',
        //         value: '',
        //         hint: 'Изменения вступят в силу после перезагрузки сервера'
        //     }
    }),
    props:{
        title:{
            default: "Тест1"
        },
        listParams:{
            default: {}
        }
    },
    components:{
        SettingsToolBar,
        InputField,
        SettingsBottomBar
    }
}
</script>