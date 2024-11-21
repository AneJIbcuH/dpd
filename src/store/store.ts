import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("dpd", () => {

  const currentQuestionNum = ref(1)
  const score = ref(0)

  return {
    currentQuestionNum,
    score
  };
});