<style scoped>

.header {
    position: absolute;
    width: 100%;
    height: 225px;
    background: #001A3C;
}

</style>

<template>
    <div>

        <v-container :style="getBackground()" class="header" fluid>
            
            <v-layout align-center justify-center row wrap>
                <v-flex md10 xs12 sm12 lg6 justify-space-around>
                    <v-layout row wrap>
                        <slot></slot>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-container>

    </div>
</template>

<script>

export default {
    name: 've-std-header',
    props: ['background'],
    methods: {

        getBackground() {
            if(!this.background) return ""

            if(this.background.startsWith('#'))
                return `background: ${this.background}`
            else
                return `background: url('${this.background}'); background-size: cover`

        }

    }
}

</script>