<template>
    <div class="chapter" v-on:click="selectChapter()" :id="'chapter-' + chapter.chapter_id">
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
    methods: {
        selectChapter: function () {
            $(".chapter").removeClass("selected");
            $("#chapter-" + this.chapter.chapter_id).addClass("selected");
            this.$emit("select_chapter", this.chapter.chapter_id);
        }
    }
}
</script>
<style scoped>
.chapter-image img {
    width: 200px;
    border-radius: 10px;
    margin-bottom: .7rem;
}

.selected {
    border: 2px solid var(--purple);
}

.chapter {
    width: fit-content;
    padding: .7rem;
    margin: .7rem;
    border-radius: 10px;
}

    .chapter p {
        margin: 0;
    }
</style>