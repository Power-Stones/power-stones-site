<template>
    <div class="admin-page page">
        <div class="background-default"></div>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/power-stones-logo.png" class="inicial-logo">
            </router-link>
        </div>
        <div class="admin-container">
            <router-view path="$router.key" />
        </div>
    </div>
</template>
<script>
export default {
    name: "adminPage"
}
</script>
<style scoped>
</style>