import Vue from 'vue';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VeApp from './components/VeApp';
import VeVerticalHeader from './components/vertical/VeVerticalHeader';
import VeVerticalForm from './components/vertical/VeVerticalForm';
import VeVerticalStep from './components/vertical/VeVerticalStep';
import VeText from './components/inputs/VeText';
import VeBrreg from './components/inputs/VeBrreg';
import VerifiedLogo from './components/VerifiedLogo';
import VeError from './components/VeError';
import VeStandardHeader from './components/standard/VeStandardHeader';
import VeStandardLogo from './components/standard/VeStandardLogo';
import VeStandardFlags from './components/standard/VeStandardFlags';
import VeStandardBody from './components/standard/VeStandardBody';
import VeLabel from './components/inputs/VeLabel';

Vue.use(Vuetify);
Vue.use(VeeValidate);

// Generic components
Vue.component('ve-app', VeApp);
Vue.component('vf-logo', VerifiedLogo);
Vue.component('ve-error', VeError);

// Vertical form components
Vue.component('ve-header', VeVerticalHeader);
Vue.component('ve-vertical-form', VeVerticalForm);
Vue.component('ve-vertical-step', VeVerticalStep);

// Input components
Vue.component('ve-label', VeLabel);
Vue.component('ve-text', VeText);
Vue.component('ve-brreg', VeBrreg);

// Standard form components
Vue.component('ve-std-header', VeStandardHeader);
Vue.component('ve-std-logo', VeStandardLogo);
Vue.component('ve-std-flags', VeStandardFlags);
Vue.component('ve-std-body', VeStandardBody);


export default class VeForm {

    constructor(app) {

        this.h = new Vue({
            el: '#veform',
            render: h => h(app)
        });

    }

}