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
        :mask="mask"
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

const locale = {
    "required": {
        "en_EN": "Required",
        "nb_NO": "Påkrevd",
        "sv_SE": "Obligatorisk"
    },
    "min_length": {
        "en_EN": "Minimum %n characters",
        "nb_NO": "Minst %n tegn",
        "sv_SE": "Min %n tecken"
    },
    "max_length": {
        "en_EN": "Max %n characters",
        "nb_NO": "Maks %n tegn",
        "sv_SE": "Max %n tecken",
    }
}

export default {
    name: 've-text',
    props: {
        value: [String, Number],
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
        mask: String,
        browserAutocomplete: Boolean,
        max: {
            type: [Number, String],
            default: 10000
        },
        min: {
            type: [Number, String],
            default: 0
        },
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
            this.$emit('input', e)
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
                v => !(v && v.length < this.min) || this.__('min_length').replace('%s', this.min),
                v => !(v && v.length > this.max) || this.__('max_length').replace('%s', this.max), 
                v => !(this.required && (!v || v.length == '')) || this.__('required')
            ]
        }

    }

}

</script>