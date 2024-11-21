<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '', // 'primary-red'
    },
    size: {
        type: String,
        default: '', // 'small'
    }
});

const buttonClasses = computed(() => {
    return [
        'button',
        `button-${props.color}`,
        `button-${props.size}`,
    ];
});

</script>

<template>
    <button :class="buttonClasses">
        <slot></slot>
    </button>
</template>

<style scoped>
@import "./MyButton.module.scss";
</style>