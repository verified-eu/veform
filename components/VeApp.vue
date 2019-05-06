<template>
    <v-app style="background: transparent !important">
        <slot></slot>
    </v-app>
</template>

<script>

export default {
    name: 've-app',
    props: ['background', 'backgroundImg']
}

</script>