<script setup lang="ts">
import { useRouter } from "vue-router";
import { AppRouts } from '@/router/router';
import MyButton from "@/components/MyButton/MyButton.vue";

const router = useRouter();

</script>

<template>
    <div class="home">
        <div class="home-text">
            Доставляем посылки тех, кто делает бизнес. <br/>
            Выгодно, надежно, удобно
        </div>
        <div>
            <img src="/logos/home.png" alt="" class="home-image">
        </div>
        <div class="home-text2">
            Доставлять с DPD легко!
            Сыграйте в мини-игру и убедитесь в этом сами прямо сейчас
        </div>
        <MyButton @click="router.push(AppRouts.QUEST)">Начать игру</MyButton>
    </div>
</template>

<style scoped>
@import "./Home.module.scss";
</style>
