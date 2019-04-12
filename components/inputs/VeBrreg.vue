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

        <v-menu flat full-width offset-y>
            <v-text-field
                :class="required != undefined ? 'required' : ''"
                slot="activator"
                :value="companyName"
                @input="handleInput"
                :label="label"
                append-icon="business"
                browser-autocomplete="none"
                :error-messages="error"
                :rules="validate()"
                :required="required"
            ></v-text-field>
            <v-list>
                <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    @click="handleClick(index)"
                >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-flex>
</template>

<script>

import axios from 'axios';

export default {
    name: 've-brreg',
    props: [
        'value',
        'label',
        'required',
        'md1', 'md2', 'md3', 'md4', 'md5', 'md6', 'md7', 'md8', 'md9', 'md10', 'md11', 'md12'
        ],
    data () {
        return {
            error: '',
            companyName: '',
            selected: { name: '' },
            items: [
                { title: "Enter company info manually" }
            ]
        }
    },
    methods: {
        handleInput(e) {

            this.companyName = e;
            this.selected.name = this.companyName;

            if(this.selected.title)
                this.$emit('input', this.selected);

            if(e.length < 2)
                return;

            this.loading = true;
            
            axios.get(encodeURI(`https://data.brreg.no/enhetsregisteret/enhet.json?page=0&size=10&$filter=startswith(navn,'${this.companyName}')`))
            .then(res => {
                this.items = [];
                for(let org of res.data.data) {
                    let data = {
                        title: org.navn,
                        name: org.navn,
                        nr: org.organisasjonsnummer,
                        address: org.forretningsadresse.adresse,
                        zip: org.forretningsadresse.postnummer,
                        town: org.forretningsadresse.poststed,
                        raw: org,
                        clicked: false
                    };
                    this.items.push(data);
                }
            })
            .catch(err => {
                this.items = [];
            })
            .finally(_ => {
                this.items.push({ title: "Enter company info manually" });
            });
        },

        handleClick(i) {
            this.selected = this.items[i];
            this.selected.clicked = true;
            this.companyName = this.selected.name;
            this.$emit('input', this.selected);
        },

        validate() {
            return [
                v => { if(this.required == "true" && !v) return 'Required'; else return true }
            ]
        }
    }
}
</script>