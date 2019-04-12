<style scoped>

.body {
    position: absolute;
    width: 100%;
    top: 130px;
}

.body-content {
    min-height: 300px;
}

.body-layout {
    padding: 15px 20px;
}

</style>

<template>
    <div>

        <v-container
            class="body"
            fluid
            :grid-list-lg="true">
            
            <v-layout align-center justify-center row wrap>
                <v-flex md10 xs12 sm12 lg6 justify-space-around>
                    <v-card class="body-content">
                        <v-layout class="body-layout" row wrap>
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
    name: 've-std-body',
    props: ['md', 'll', 'xl'],
    methods: {

    }
}

</script>