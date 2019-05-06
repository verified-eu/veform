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

          <v-autocomplete
                :value="companyName"
                :class="required ? 'required' : ''"
                :box="box"
                :rules="validate()"
                :solo="solo"
                :outline="outline"
                :disabled="disabled"
                :readonly="readonly"
                :items="entries"
                :search-input.sync="search"
                placeholder="Start typing to search"
                hide-no-data
                :label="label"
                :loading="loading"
                browser-autocomplete="disabled"
                v-model="model"
                return-object
            >
            </v-autocomplete>
        
    </v-flex>
</template>

<script>

import axios from 'axios';

const locale = {
    "required": {
        "en_EN": "Required",
        "nb_NO": "Påkrevd",
        "sv_SE": "Obligatorisk"
    }
}

export default {
    name: 've-brreg',
    props: {
        value: null,
        label: [String, Number],
        required: {
            type: Boolean,
            default: false
        },
        box: Boolean,
        solo: Boolean,
        outline: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        clearable: Boolean,
        md1: null, md2: null, md3: null, md4: null, md5: null, md6: null, md7: null, md8: null, md9: null, md10: null, md11: null, md12: null
    },
    data () {
        return {
            error: '',
            companyName: '',
            selected: { name: '' },
            items: [],
            search: null,
            model: null,
            loading: false
        }
    },
    methods: {

        __(key) {
            if(!locale[key])
                return '...'
            
            if(!locale[key][this.$root.locale])
                return locale[key]['en_EN']

            return locale[key][this.$root.locale]
        },

        validate() {
            return [
                v => !(this.required && (!v || v.length == '')) || this.__('required')
            ]
        }

    },

    computed: {

        entries() {
            return this.items
        }

    },

    watch: {

        search(val) {
            
            if(!val || val.length < 2)
                return;
            
            this.loading = true
            axios.get(encodeURI(`https://data.brreg.no/enhetsregisteret/enhet.json?page=0&size=10&$filter=startswith(navn,'${val}')`))
            .then(res => {
                this.items = []
                for(let org of res.data.data) {
                    let data = {
                        value: org.navn,
                        text: org.navn,
                        name: org.navn,
                        nr: org.organisasjonsnummer,
                        address: org.forretningsadresse.adresse,
                        zip: org.forretningsadresse.postnummer,
                        town: org.forretningsadresse.poststed,
                        raw: org
                    }
                    this.items.push(data)
                }
            })
            .catch(err => {
                this.items = []
            })
            .finally(_ => {
                this.loading = false
            });

        },

        model() {
            this.$emit('input', this.model)
        }

    }
}
</script>