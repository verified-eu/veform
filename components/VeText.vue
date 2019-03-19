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
    :md12="md12">

        <v-text-field
        :class="required != undefined ? 'required' : ''"
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

export default {
    name: 've-text',
    props: [
        'value',
        'label',
        'box',
        'solo',
        'outline',
        'disabled',
        'readonly',
        'clearable',
        'prepend-icon',
        'prepend-inner-icon',
        'append-icon',
        'append-outer-icon',
        'placeholder',
        'mask',
        'browser-autocomplete',
        'max',
        'min',
        'required',
        'md1', 'md2', 'md3', 'md4', 'md5', 'md6', 'md7', 'md8', 'md9', 'md10', 'md11', 'md12'
    ],

    data() {
        return {
            error: ''
        }
    },

    methods: {

        handleInput(e) {
            this.$emit('input', e);
        },

        validate() {
            return [
                v => { if(this.required == "true" && !v) return 'Required'; else return true },
                v => { v = v || ''; if(this.min && v.length < this.min) return `Minimum ${this.min} characters`; else return true },
                v => { v = v || ''; if(this.max && v.length > this.max) return `Max ${this.max} characters`; else return true }
            ]
        }

    }

}

</script>