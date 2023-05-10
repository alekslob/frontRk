import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            background: colors.blueGrey.lighten3,
            settings_btn: colors.blueGrey.lighten3,
            orders_btn: colors.blueGrey.lighten3
          },
        },
      },
});
