<script setup lang="ts">

import { useStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
import { AppRouts } from '../../router/router';

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
        Вы угадали {{ score }} из 9
    </div>
    <button @click="restart">
        По новой
    </button>
</template>

<style scoped>
    @import "./End.module.scss"
</style>