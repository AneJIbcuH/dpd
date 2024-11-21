<script setup lang="ts">
import { questions } from '@/api/api';
import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import QuizText from '@/components/QuizText/QuizText.vue';

const { currentQuestionNum } = storeToRefs(useStore())
const currentQuestion = computed(() => questions.find(el => el.id == currentQuestionNum.value))

</script>

<template>
    <div class="quest">
        <h1>Игра - "Верю не верю"</h1>
        <QuizText :question="currentQuestion" />
        <div class="quest-image">
            <img :src="currentQuestion!.img" alt="">
        </div>
    </div>
</template>

<style scoped>
@import "./Quest.module.scss";
</style>
