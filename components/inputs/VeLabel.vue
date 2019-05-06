<template>
    <v-flex mt-0 pt-0 mb-0 pb-0 md12>
        <h3 :style="'font-size: ' + size * 6 + 'px; color: ' + color + '; font-weight: 300'"><slot></slot></h3>
        <span v-if="helpText != ''" class="subheading">
            <small>{{ helpText }}</small>
        </span>
    </v-flex>
</template>

<script>

export default {
    name: 've-label',
    props: {
        helpText: {
            default: ""
        },
        size: {
            type: [String, Number],
            default: 3
        },
        color: {
            type: String,
            default: "#555"
        }
    },

    data() {
        return {
        }
    },

    methods: {



    }

}

</script>