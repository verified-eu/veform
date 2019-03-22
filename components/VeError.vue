<style scoped>
.ve-error-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    z-index: 9000001;
}
.ve-error-modal {
    z-index: 9000010;
    position: absolute;
    width: 100%;
    height: 100vh;
}
.error-card {
	text-align: left;
	margin-bottom: 50px;
}
.error-header {
    width: 100%;
    height: 50px;
    background: red;
}
.error-code {
    width: 100%;
    background: beige;
    padding: 5px;
    font-size: 12px;
}
</style>

<template>
    <div v-if="value.length > 0" style="position: absolute; width: 100%; height: 100%;">
        <v-container class="ve-error-modal" bg fill-height grid-list-md text-xs-center>
            <v-layout row wrap align-center>
                <v-flex md5 offset-md4>
                    <v-card class="error-card">
                        <v-toolbar color="#DD4343">
                            <v-toolbar-title style="color: white">Woops, something went wrong!</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn @click="value = []" icon>
                                <v-icon style="color: white">close</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <div style="max-height: 500px; overflow: auto;">
                            <div v-for="(error, index) in value" :key="index" style="padding: 25px;">
                                <p>{{ error.message }}</p>
                                <div class="error-code">{{ error.stack }}</div>
                            </div>
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="ve-error-bg"></div>
    </div>
</template>

<script>

export default {
    name: 've-error',
    props: ['value'],

    data() {
        return {
        }
    },

    methods: {

        mailSupport() {
            window.location.href = 'mailto:support@verified.eu'
        },

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