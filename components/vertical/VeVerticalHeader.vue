<style scoped>
    .title {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>

<template>
<v-flex md6>
    <v-layout row wrap>
        <v-flex xs12>
        <v-card dark :color="color || 'primary'">
            <v-card-text class="title">
                <h3><slot></slot></h3>
            </v-card-text>
        </v-card>
        </v-flex>
    </v-layout>
</v-flex>
</template>

<script>

export default {
    name: 've-vertical-header',
    props: ['color']
}

</script>