<script setup lang="ts">
import { computed, ref } from 'vue';
import { Question } from '@/models/models';
import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
import { AppRouts } from '@/router/router';
import { questions } from '@/api/api';
import MyButton from '../MyButton/MyButton.vue';

defineProps<{
    question: Question | undefined
}>();

const router = useRouter();
const myAnswer = ref<null | boolean>(null)
const { currentQuestionNum, score } = storeToRefs(useStore())

function nextQuestion(question: Question) {
    if (myAnswer.value === question.believe.answer) {
        score.value++
    }

    if (currentQuestionNum.value == 9) {
        router.push(AppRouts.END)
    } else {
        currentQuestionNum.value++
        myAnswer.value = null
    }
}

const widthBar = computed(() => 888 / questions.length * currentQuestionNum.value + 'px')
</script>

<template>
    <div>
        <div class="quiztext" v-if="myAnswer === null">
            <div class="quiztext-bar">
                <div class="quiztext-progress" :style="{ width: widthBar }"></div>
            </div>
            <div class="quiztext-score">Вопрос {{ question!.id }}/{{ questions.length }}</div>
            <div class="quiztext-question">{{ question!.question }}</div>
            <MyButton @click="myAnswer = true" color="primary-red" size="small">Верю</MyButton>
            <MyButton @click="myAnswer = false" color="primary-red" size="small">Не верю</MyButton>
        </div>
        <div class="quiztext" v-else>
            <h2 v-if="myAnswer === false">Не верю</h2>
            <h2 v-else>Верю</h2>
            <div class="quiztext-answer">{{ myAnswer ? question!.believe.text : question!.disbelieve }}</div>
            <MyButton @click="nextQuestion(question!)" color="primary-red">Продолжить</MyButton>
        </div>
    </div>
</template>

<style scoped>
@import "./QuizText.module.scss";
</style>