<style scoped>

.body {
    position: absolute;
    width: 100%;
    top: 125px;
}

.body-content {
    min-height: 300px
}

</style>

<template>
    <div>

        <v-container class="body" fluid>
            
            <v-layout align-center justify-center row wrap>
                <v-flex md6 justify-space-around>
                    <v-card class="body-content">
                        <v-layout style="padding: 25px" row wrap>
                            <slot></slot>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>

    </div>
</template>

<script>

export default {
    name: 've-standard-body',
    props: [],
    methods: {

    }
}

</script>