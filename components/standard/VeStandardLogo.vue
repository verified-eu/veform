
<style scoped>

h1 {
    color: #fff;
    font-size: 40px;
    margin-top: 20px;
}

</style>

<template>
    <v-flex xs10>
        <h1><slot></slot></h1>
        <img :src="source" :style="getSize()" >
    </v-flex>
</template>

<script>

export default {
    name: 've-std-logo',
    props: ['source', 'size'],
    methods: {
        getSize() {
            if(!this.size) return ''
            return `width: ${this.size}`
        }
    }
}

</script>