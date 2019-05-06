<style lang="sass" scoped>

.fpl-container
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background: #fff
    z-index: 4999

.fpl-loader
    margin-top: calc(50vh - 32px)
    margin-left: calc(50% - 32px)

</style>


<template>
    <div class="fpl-container">
        <img class="fpl-loader" src="../assets/loader64.gif">
    </div>
</template>

<script>

export default {
    name: 've-full-page-loader'
}

</script>