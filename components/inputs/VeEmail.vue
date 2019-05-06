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
    "invalid_email": {
        "en_EN": "Invalid email",
        "nb_NO": "Ugyldig e-post",
        "sv_SE": "Ogiltig e-post"
    }
}

const validEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
    name: 've-email',
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
                v => validEmail(v) || this.__('invalid_email')
            ]
        }

    }

}

</script>