<script setup lang="ts">

import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
import { AppRouts } from '@/router/router';
import MyButton from '@/components/MyButton/MyButton.vue';

const router = useRouter();
const { currentQuestionNum, score } = storeToRefs(useStore())

function restart() {
    currentQuestionNum.value = 1
    score.value = 0
    router.push(AppRouts.HOME)
}
</script>

<template>
    <div class="end">
        <div class="end-text">
            Вы угадали {{ score }} из 9
        </div>
        <MyButton @click="restart">По новой</MyButton>
    </div>
</template>

<style scoped>
@import "./End.module.scss"
</style>