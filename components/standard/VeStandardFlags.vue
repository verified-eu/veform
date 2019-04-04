<style scoped>

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

</style>

<template>
    <v-flex md6 text-md-right>
        <v-menu bottom left offset-y transition="slide-x-transition">
            <template v-slot:activator="{ on }">
                <v-btn style="width: 50px; height: 25px;" :ripple="false" dark icon v-on="on">
                    <div :class="{
                        flag: true,
                        rounded: !rounded,
                        nb_NO: nb_NO != null,
                        sv_SE: sv_SE != null,
                        da_DK: da_DK != null,
                        en_EN: en_EN != null,
                        fi_FI: fi_FI != null,
                        fr_FR: fr_FR != null,
                        de_DE: de_DE != null,
                        nl_NL: nl_NL != null,
                        es_ES: es_ES != null,
                        pl_PL: pl_PL != null
                    }"></div>
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" @click="onClick()">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-flex>
</template>

<script>

export default {
    name: 've-standard-flags',
    props: [
        'rounded',
        'nb_NO', 'sv_SE', 'da_DK', 'en_EN', 'fi_FI', 'fr_FR', 'de_DE', 'nl_NL', 'es_ES', 'pl_PL'
        ],
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
    methods: {

        getStyles() {

            let style = ""
            if(this.rounded) style += "border-radius: 5px"

            return style

        },

        onClick() {

        }

    }
}

</script>