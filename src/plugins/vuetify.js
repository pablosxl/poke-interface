import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify);

const vuetifyOptions = {
    iconfont: 'mdi',
    theme: {

        base: '#FF6C2F',
        primary: '#005AA3',
        secondary: '#54BBAB',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    options: {
        customProperties: true
    },
    lang: {
        locales: { pt },
        current: 'pt'
    }
}

export default new Vuetify({
    vuetifyOptions
});
