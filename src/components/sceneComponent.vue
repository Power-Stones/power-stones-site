<template>
    <div class="scene" v-on:click="selectScene()" :class="selected ? 'selected' : ''">
        <div class="scene-image">
            <img :src="scene.src">
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "sceneComponent",
    props: ["scene"],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        selectScene: function () {
            if (!this.selected) {
                this.selected = true;
                $(".scene").removeClass("selected");
                this.$emit("select_scene", this.scene.id_scene);
            } else {
                this.deselectScene();
            }
        },
        deselectScene: function () {
            this.selected = false;
            this.$emit("deselect_scene", this.scene.id_scene);
        }
    }
}
</script>
<style scoped>
.scene-image img {
    width: 200px;
}

.selected {
    border: 2px solid var(--purple);
}
</style>