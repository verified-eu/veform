<template>
    <v-form ref="form" class="flex">
        <v-layout row wrap>
            <slot></slot>
        </v-layout>
    </v-form>
</template>

<script>

export default {
    name: 've-form',
    props: {},
    methods: {
        validate() {
            return this.$refs.form.validate()
        },
        reset() {
            return this.$refs.form.reset()
        },
        resetValidation() {
            return this.$refs.form.resetValidation()
        }
    }
}

</script>