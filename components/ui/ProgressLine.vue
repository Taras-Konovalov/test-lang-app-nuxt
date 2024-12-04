<script setup lang="ts">
withDefaults(defineProps<{
  value: string
  isVisibleValue?: boolean
}>(), {
  isVisibleValue: true
})
</script>

<template>
  <div class="progress-line">
    <v-progress-linear
      height="6"
      :model-value="value"
    ></v-progress-linear>
    <span v-if="isVisibleValue">{{ `${value}%` }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/style/main.scss";

:deep(.v-progress-linear) {
  border-radius: 12px;
}

:deep(.v-progress-linear__background) {
  background: $lightGray !important;
}

:deep(.v-progress-linear__determinate) {
  background-color: $vividOrange !important;
}

.progress-line {
  max-width: 270px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;

  & > span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    color: $gunmetal;
  }
}
</style>