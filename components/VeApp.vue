<template>
    <v-app :style="background ? 'background-color:' + background + ';' : '' + backgroundImg ? 'background-image:' + backgroundImg : ''">
        <slot></slot>
    </v-app>
</template>

<script>

export default {
    name: 've-app',
    props: ['background', 'backgroundImg']
}

</script>