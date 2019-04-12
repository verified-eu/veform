<template>

    <div>

        <v-stepper-step :complete="false" :step="step">
            {{ title }}
            <small v-if="description">{{ description }}</small>
        </v-stepper-step>

        <v-stepper-content :step="step">

            <v-container class="ml-0 pl-0" grid-list-xl>

                <v-layout row wrap>
                    
                    <slot></slot>

                </v-layout>

            </v-container>

        </v-stepper-content>

    </div>

</template>

<script>

export default {
    name: 've-vertical-step',
    props: [
        'step',
        'title',
        'description'
    ],
    data() {
        return {
        }
    }
}

</script>