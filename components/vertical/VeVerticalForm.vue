<style scoped>
    .frame {
        max-width: 1000px;
    }
</style>

<template>

    <v-container class="frame">

        <v-stepper v-model="step" vertical>

            <slot></slot>

        </v-stepper>
        
    </v-container>

</template>

<script>

export default {
    name: 've-vertical-form',
    data() {
        return {
            step: 1
        }
    },
    methods: {
    },
    mounted() {
        console.log('ve-vertical-form childs', this.$slots.default)
    }
}

</script>