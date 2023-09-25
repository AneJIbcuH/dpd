<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <RouterView v-slot="{ Component }" :key="route.fullPath">
    <template v-if="Component">
      <transition name="fade-page" mode="out-in">
        <suspense>
          <component :is="Component"></component>
        </suspense>
      </transition>
    </template>
  </RouterView>
</template>

<style scoped></style>
