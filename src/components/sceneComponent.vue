<template>
    <div class="scene" v-on:click="selectScene()" :id="'scene-' + scene.id_scene">
        <div class="scene-image">
            <img :src="scene.src">
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "sceneComponent",
    props: ["scene", "parentElementId"],
    methods: {
        selectScene: function () {
            $("#" + this.parentElementId + " .scene").removeClass("selected");
            $("#" + this.parentElementId + " #scene-" + this.scene.id_scene).addClass("selected");
            this.$emit("select_scene", this.scene.id_scene);
        }
    }
}
</script>
<style scoped>
.scene-image img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: .7rem;
}

.selected {
    border: 2px solid var(--purple);
}

.scene {
    width: fit-content;
    padding: .7rem;
    margin: .7rem;
    border-radius: 10px;
}

    .scene p {
        margin: 0;
    }
</style>