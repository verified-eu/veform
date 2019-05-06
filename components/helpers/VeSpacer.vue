<template>
    <div :style="`margin: ${size}px auto`"></div>
</template>

<script>

export default {
    name: 've-spacer',
    props: {
        size: {
            type: [String, Number],
            default: 60
        }
    }
}

</script>