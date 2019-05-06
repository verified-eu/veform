import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VeApp from './components/VeApp'
import VeVerticalHeader from './components/vertical/VeVerticalHeader'
import VeVerticalForm from './components/vertical/VeVerticalForm'
import VeVerticalStep from './components/vertical/VeVerticalStep'
import VeText from './components/inputs/VeText'
import VeBrreg from './components/inputs/VeBrreg'
import VerifiedLogo from './components/VerifiedLogo'
import VeError from './components/VeError'
import VeStandardHeader from './components/standard/VeStandardHeader'
import VeStandardLogo from './components/standard/VeStandardLogo'
import VeStandardFlags from './components/standard/VeStandardFlags'
import VeStandardBody from './components/standard/VeStandardBody'
import VeLabel from './components/inputs/VeLabel'
import VeFormComponent from './components/VeForm'
import VeZipNo from './components/inputs/VeZipNo'
import VeEmail from './components/inputs/VeEmail'
import VeSpacer from './components/helpers/VeSpacer'
import VeFullPageLoader from './components/VeFullPageLoader'

Vue.use(Vuetify)
Vue.use(VeeValidate)

/* #region generic components */
Vue.component('ve-app', VeApp)
Vue.component('vf-logo', VerifiedLogo)
Vue.component('ve-error', VeError)
Vue.component('ve-form', VeFormComponent)
Vue.component('ve-full-page-loader', VeFullPageLoader)
/* #endregion */

/* #region helper components */
Vue.component('ve-spacer', VeSpacer)
/* #endregion */

/* #region standard form components */
Vue.component('ve-std-header', VeStandardHeader)
Vue.component('ve-std-logo', VeStandardLogo)
Vue.component('ve-std-flags', VeStandardFlags)
Vue.component('ve-std-body', VeStandardBody)
/* #endregion */

/* #region vertical form components */
Vue.component('ve-header', VeVerticalHeader)
Vue.component('ve-vertical-form', VeVerticalForm)
Vue.component('ve-vertical-step', VeVerticalStep)
/* #endregion */

/* #region input components */
Vue.component('ve-label', VeLabel)
Vue.component('ve-text', VeText)
Vue.component('ve-brreg', VeBrreg)
Vue.component('ve-zip-no', VeZipNo)
Vue.component('ve-email', VeEmail)
/* #endregion */


export default class VeForm {

    constructor(app) {

        this.h = new Vue({
            el: '#veform',
            data() {
                return {
                    locale: "en_EN"
                }
            },
            watch: {
                locale: (val) => {
                    // Revalidate all forms in order to update error messages to the new locale
                    for(let ref of Object.values(this.h.$children[0].$refs))
                        if(ref.$vnode.tag.includes('ve-form')) ref.validate()
                }
            },
            render: h => h(app)
        })

    }

}