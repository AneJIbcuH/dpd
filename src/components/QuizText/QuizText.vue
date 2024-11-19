<script setup lang="ts">
import { ref } from 'vue';
import { Question } from '../../models/models';
import { useStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
import { AppRouts } from '../../router/router';

defineProps<{
    question: Question | undefined
}>();

const router = useRouter();
const myAnswer = ref()
const { currentQuestionNum, score } = storeToRefs(useStore())

function nextQuestion(question: Question) {
    if (myAnswer.value === question.believe.answer) {
        score.value++
    }

    if (currentQuestionNum.value == 9) {
        router.push(AppRouts.END)
    } else {
        currentQuestionNum.value++
        myAnswer.value = undefined
    }
}
</script>

<template>
    <div class="quiztext" v-if="myAnswer !== false && myAnswer !== true">
        <div class="quiztext__quest">Вопрос {{ question!.id }}/9</div>
        <div>{{ question!.question }}</div>
        <button @click="myAnswer = true">Верю</button>
        <button @click="myAnswer = false">Не верю</button>
    </div>
    <div class="quiztext" v-else>
        <h2 v-if="myAnswer === false">Не верю</h2>
        <h2 v-else>Верю</h2>
        <div>{{ myAnswer ? question!.believe.text : question!.disbelieve }}</div>
        <button @click="nextQuestion(question!)">Продолжить</button>
    </div>
</template>

<style scoped>
@import "./QuizText.module.scss";
</style>