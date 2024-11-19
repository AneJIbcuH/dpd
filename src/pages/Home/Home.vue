<script setup lang="ts">
import { useRouter } from "vue-router";
import { AppRouts } from '../../router/router';

const router = useRouter();

</script>

<template>
 
        <div class="home__text">
            Доставляем посылки тех, кто делает бизнес.
            Выгодно, надежно, удобно
        </div>
        <img src="/logos/home.png" alt="" class="image">
        <div class="home__text">
            Доставлять с DPD легко!
            Сыграйте в мини-игру и убедитесь в этом сами прямо сейчас
        </div>
        <button @click="() => router.push(AppRouts.QUEST)">
            Начать игру
        </button>


</template>
<style scoped>
@import "./Home.module.scss";
</style>
