<template>
    <div class="chapter" v-on:click="selectChapter()" :class="selected ? 'selected' : ''">
        <div class="chapter-image">
            <img :src="chapter.level_background">
        </div>
        <p>{{ chapter.title }}</p>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "chapterComponent",
    props: ["chapter"],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        selectChapter: function () {
            if (!this.selected) {
                this.selected = true;
                $(".chapter").removeClass("selected");
                this.$emit("select_chapter", this.chapter.chapter_id);
            } else {
                this.deselectChapter();
            }
        },
        deselectChapter: function () {
            this.selected = false;
            this.$emit("deselect_chapter", this.chapter.chapter_id);
        }
    }
}
</script>
<style scoped>
.chapter-image img {
    width: 200px;
}

.selected {
    border: 2px solid var(--purple);
}
</style>