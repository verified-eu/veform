import Vue from 'vue';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);
Vue.use(VeeValidate);

// VeForm Components Start
import VeApp from './components/VeApp';
Vue.component('ve-form', VeApp);

import VeHeader from './components/VeHeader';
Vue.component('ve-header', VeHeader);

import VeVerticalForm from './components/VeVerticalForm';
Vue.component('ve-vertical-form', VeVerticalForm);

import VeVerticalStep from './components/VeVerticalStep';
Vue.component('ve-vertical-step', VeVerticalStep);

import VeText from './components/VeText';
Vue.component('ve-text', VeText);

import VeBrreg from './components/VeBrreg';
Vue.component('ve-brreg', VeBrreg);

// VeForm Components Stop

export default class VeForm {

    constructor(app) {

        this.h = new Vue({
            el: '#veform',
            render: h => h(app)
        });

    }

}