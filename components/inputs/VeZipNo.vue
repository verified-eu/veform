<style>

.required label:after{
  content:" *";
  color: red;
  font-weight: bold;
}

</style>

<template>
    <v-flex
    xs12
    :md1="md1"
    :md2="md2"
    :md3="md3"
    :md4="md4"
    :md5="md5"
    :md6="md6"
    :md7="md7"
    :md8="md8"
    :md9="md9"
    :md10="md10"
    :md11="md11"
    :md12="md12"
    >

        <v-text-field
        :class="required ? 'required' : ''"
        :box="box"
        :solo="solo"
        :outline="outline"
        :disabled="disabled"
        :readonly="readonly"
        :clearable="clearable"
        mask="####"
        :label="label"
        :placeholder="placeholder"
        :error-messages="error"
        @input="handleInput"
        :value="value"
        :rules="validate()"
        :required="required"
        ></v-text-field>

    </v-flex>
</template>

<script>

import zipData from '../../assets/data/zip_no.json'

const locale = {
    "required": {
        "en_EN": "Required",
        "nb_NO": "Påkrevd",
        "sv_SE": "Obligatorisk"
    },
    "four_digits": {
        "en_EN": "Must be 4 digits",
        "nb_NO": "Må være 4 tall",
        "sv_SE": "Måste vara 4 siffror"
    },
    "invalid_zip": {
        "en_EN": "Not a valid zip",
        "nb_NO": "Ugyldig postkode",
        "sv_SE": "Inte en giltig postkod",
    }
}

export default {
    name: 've-zip-no',
    props: {
        value: null,
        label: String,
        box: Boolean,
        solo: Boolean,
        outline: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        clearable: Boolean,
        prependIcon: String,
        prependInnerIcon: String,
        appendIcon: String,
        appendOuterIcon: String,
        placeholder: String,
        browserAutocomplete: Boolean,
        required: {
            type: Boolean,
            default: false
        },
        md1: String, md2: String, md3: String, md4: String, md5: String, md6: String, md7: String, md8: String, md9: String, md10: String, md11: String, md12: String
    },

    data() {
        return {
            error: ''
        }
    },

    methods: {

        handleInput(e) {

            if(zipData[e])
                this.$emit('town', zipData[e])

            this.$emit('input', e);

        },

        __(key) {
            if(!locale[key])
                return '...'
            
            if(!locale[key][this.$root.locale])
                return locale[key]['en_EN']

            return locale[key][this.$root.locale]
        },

        validate() {
            return [
                v => !(this.required && (!v || v.length == '')) || this.__('required'),
                v => !(v && v.length != 4) || this.__('four_digits'),
                v => (v in zipData) || this.__('invalid_zip')
            ]
        }

    }

}

</script>