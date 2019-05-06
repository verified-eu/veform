<style scoped>

.flag-container {
    margin-top: 35px;
}

.flag {
    width: 24px;
    height: 16px;
    background: url('../../assets/flags.png');
}

.flag.da_DK {
	background-position: 0 -16px;
}

.flag.sv_SE {
	background-position: 0 -32px;
}

.flag.nb_NO {
	background-position: 0 -48px;
}

.flag.fi_FI {
	background-position: 0 -64px;
}

.flag.fr_FR {
	background-position: 0 -80px;
}

.flag.de_DE {
	background-position: 0 -96px;
}

.flag.nl_NL {
	background-position: 0 -112px;
}

.flag.es_ES {
	background-position: 0 -128px;
}

.flag.pl_PL {
	background-position: 0 -144px;
}

.rounded {
    border-radius: 4px;
}

.v-btn:hover:before,
.v-btn:focus:before,
.v-btn:active:before,
.v-btn:focus:before {
    color: transparent;
    transition: none;
}

.list-flag {
    display: inline-block;
    margin-bottom: -2px;
}

</style>

<template>
    <v-flex class="flag-container" xs2 text-xs-right>
        <v-menu bottom left offset-y transition="slide-x-transition">
            <template v-slot:activator="{ on }">
                <v-btn style="width: 50px; height: 25px;" :ripple="false" dark icon v-on="on">
                    <div :class="{
                        flag: true,
                        rounded: rounded != null,
                        nb_NO: $root.locale == 'nb_NO',
                        sv_SE: $root.locale == 'sv_SE',
                        da_DK: $root.locale == 'da_DK',
                        en_EN: $root.locale == 'en_EN',
                        fi_FI: $root.locale == 'fi_FI',
                        fr_FR: $root.locale == 'fr_FR',
                        de_DE: $root.locale == 'de_DE',
                        nl_NL: $root.locale == 'nl_NL',
                        es_ES: $root.locale == 'es_ES',
                        pl_PL: $root.locale == 'pl_PL'
                    }"></div>
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-tile v-for="(lang, i) in languages" :key="i" @click="handleInput(lang.code)">
                    <v-list-tile-title>
                        <div :class="'flag ' + lang.code + ' list-flag' + (rounded != null ? ' rounded' : '')"></div>
                        {{ lang.names[$root.locale] }}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-flex>
</template>

<script>

class Language {

    constructor(code, names) {
        this.code = code
        this.names = names
    }

}

const languageTranslations = {
    nb_NO: {
        nb_NO: "Norsk",
        en_EN: "Norwegian",
        sv_SE: "Norska",
        da_DK: "Norsk",
        fi_FI: "Norjalainen",
        fr_FR: "Norvégien",
        de_DE: "Norwegisch",
        nl_NL: "Noors",
        es_ES: "Noruego",
        pl_PL: "Norweski"
    },
    en_EN: {
        nb_NO: "Engelsk",
        en_EN: "English",
        sv_SE: "Engelsk",
        da_DK: "Engelsk",
        fi_FI: "Englanti",
        fr_FR: "Anglaise",
        de_DE: "Englisch",
        nl_NL: "Engels",
        es_ES: "Inglés",
        pl_PL: "Język angielski"
    },
    sv_SE: {
        nb_NO: "Svensk",
        en_EN: "Swedish",
        sv_SE: "Svenska",
        da_DK: "Svensk",
        fi_FI: "Ruotsin kieli",
        fr_FR: "Suédois",
        de_DE: "Schwedisch",
        nl_NL: "Zweeds",
        es_ES: "Sueco",
        pl_PL: "Szwedzki"
    },
    da_DK: {
        nb_NO: "Dansk",
        en_EN: "Danish",
        sv_SE: "Danska",
        da_DK: "Dansk",
        fi_FI: "Tanskan kieli",
        fr_FR: "Danois",
        de_DE: "Dänisch",
        nl_NL: "Deens",
        es_ES: "Danés",
        pl_PL: "Duński"
    },
    fi_FI: {
        nb_NO: "Finsk",
        en_EN: "Finnish",
        sv_SE: "Finsk",
        da_DK: "Finsk",
        fi_FI: "Suomalainen",
        fr_FR: "Finlandais",
        de_DE: "Finnisch",
        nl_NL: "Fins",
        es_ES: "Finlandés",
        pl_PL: "Fiński"
    },
    fr_FR: {
        nb_NO: "Fransk",
        en_EN: "French",
        sv_SE: "Franska",
        da_DK: "Fransk",
        fi_FI: "Ranskan kieli",
        fr_FR: "Français",
        de_DE: "Französisch",
        nl_NL: "Frans",
        es_ES: "Francés",
        pl_PL: "Francuski"
    },
    de_DE: {
        nb_NO: "Tysk",
        en_EN: "German",
        sv_SE: "Tysk",
        da_DK: "Tysk",
        fi_FI: "Saksan kieli",
        fr_FR: "Allemand",
        de_DE: "Deutsche",
        nl_NL: "Duitse",
        es_ES: "Alemán",
        pl_PL: "Niemiecki"
    },
    nl_NL: {
        nb_NO: "Nederlandsk",
        en_EN: "Dutch",
        sv_SE: "Holländska",
        da_DK: "Hollandske",
        fi_FI: "Hollannin kieli",
        fr_FR: "Néerlandais",
        de_DE: "Niederländisch",
        nl_NL: "Nederlands",
        es_ES: "Holandés",
        pl_PL: "Holenderski"
    },
    es_ES: {
        nb_NO: "Spansk",
        en_EN: "Spanish",
        sv_SE: "Spansk",
        da_DK: "Spansk",
        fi_FI: "Espanja",
        fr_FR: "Espanol",
        de_DE: "Spanisch",
        nl_NL: "Spaans",
        es_ES: "Español",
        pl_PL: "Hiszpański"
    },
    pl_PL: {
        nb_NO: "Polsk",
        en_EN: "Polish",
        sv_SE: "Putsa",
        da_DK: "Polsk",
        fi_FI: "Puola",
        fr_FR: "Polonais",
        de_DE: "Polnisch",
        nl_NL: "Pools",
        es_ES: "Polaco",
        pl_PL: "Polski"
    }
}

export default {
    name: 've-std-flags',
    props: [
        'rounded',
        'translations',
        'nb_NO', 'sv_SE', 'da_DK', 'en_EN', 'fi_FI', 'fr_FR', 'de_DE', 'nl_NL', 'es_ES', 'pl_PL'
        ],
    data: () => ({
      languages: []
    }),
    methods: {

        handleInput(e) {
            this.$root.locale = e
            this.$emit('input', e)
        },

        getStyles() {

            let style = ""
            if(this.rounded) style += "border-radius: 5px"

            return style

        }

    },
    mounted() {
        
        let languages = []

        if(this.nb_NO != null) languages.push(new Language('nb_NO', languageTranslations.nb_NO))
        if(this.sv_SE != null) languages.push(new Language('sv_SE', languageTranslations.sv_SE))
        if(this.en_EN != null) languages.push(new Language('en_EN', languageTranslations.en_EN))
        if(this.da_DK != null) languages.push(new Language('da_DK', languageTranslations.da_DK))
        if(this.fi_FI != null) languages.push(new Language('fi_FI', languageTranslations.fi_FI))
        if(this.fr_FR != null) languages.push(new Language('fr_FR', languageTranslations.fr_FR))
        if(this.de_DE != null) languages.push(new Language('de_DE', languageTranslations.de_DE))
        if(this.nl_NL != null) languages.push(new Language('nl_NL', languageTranslations.nl_NL))
        if(this.es_ES != null) languages.push(new Language('es_ES', languageTranslations.es_ES))
        if(this.pl_PL != null) languages.push(new Language('pl_PL', languageTranslations.pl_PL))

        this.languages = languages

    }
}

</script>