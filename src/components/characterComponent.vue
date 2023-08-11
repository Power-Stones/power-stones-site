<template>
    <div class="character-container">
        <div class="row" :class="controlClass ? 'flex-row-reverse' : ''">
            <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                <img :src="image" class="img-fluid" />
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="character-informations" :class="controlClass ? 'text-right' : 'text-left'">
                    <h2 class="character-name">{{ name }}</h2>
                    <p class="character-text">{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["text", "name", "image", "controlClass"],
    name: "characterComponent"
}
</script>
<style scoped>
.character-container {
    margin: 4rem 0;
}
.character-name {
    font-weight: 600;
}
</style>