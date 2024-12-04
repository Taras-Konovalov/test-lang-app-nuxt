<script setup lang="ts">
import GoogleIcon from '../svg/GoogleIcon.vue';

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button 
    class="google-btn"
    @click="emit('click')"
  >
    <GoogleIcon />
    Увійти через Google
  </button>
</template>



<style scoped lang="scss">
@import "../../assets/style/main.scss";

.google-btn {
  font-family: 'Roboto', sans-serif;
  background-color: $white;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  width: 100%;
  height: 54px;
  border-radius: 10px;
  color: $shadowBlack;
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  box-shadow: $dimBlackShadow;

}
</style>