<script setup lang="ts">
import FaceBookIcon from '../svg/FaceBookIcon.vue';

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button 
    class="facebook-btn"
    @click="emit('click')"
  >
    <FaceBookIcon />
    Увійти через Facebook
  </button>
</template>



<style scoped lang="scss">
@import "../../assets/style/main.scss";

.facebook-btn {
  font-family: 'Helvetica', sans-serif;
  background-color: $vibrantBlue;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  width: 100%;
  height: 54px;
  border-radius: 10px;
  color: $white;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
}
</style>