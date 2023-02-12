<template>
    <div class="visual-novel-header-container p-3">
        <div class="user-container">
            <img src="https://img.quizur.com/f/img5ea5e54098b6d2.06215882.jpeg?lastEdited=1587930471" alt="">
            <i class="fas fa-caret-down"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "visualNovelHeader"
}
</script>
<style scoped>

.visual-novel-header-container {
    display: flex;
    width: 95vw;
    max-width: 2000px;
    margin: auto;
    justify-content: flex-end;
}

.user-container {
    cursor: pointer;
    width: fit-content;
}
    .user-container img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: .7rem;
    }

    .user-container i {
        font-size: 1.4rem;
    }
</style>