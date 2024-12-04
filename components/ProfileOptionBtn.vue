<script setup lang="ts">
import { AppColors } from '~/types/enums';

defineProps<{
  label: string
  data?: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button @click="emit('click')" class="option-btn">
    <span class="label">{{ label }}</span>
    <div class="data">
      <span v-if="data">
        {{ data }}
      </span>
      <v-icon 
        :color="AppColors.VIVID_ORANGE" 
        size="20"
      >
        mdi mdi-chevron-right
      </v-icon>
    </div>
  </button>
</template>



<style scoped lang="scss">
@import "../assets/style/main.scss";

.option-btn {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  padding: 17.5px 16px;
  background-color: $white;
  border-radius: 16px;
  width: 100%;

  & .label {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: $chestnut;
  }

  & .data {
    display: flex;
    align-items: center;
    gap: 8px;

    & > span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: $gunmetal;
    }
  }
}
</style>