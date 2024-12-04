<script setup lang="ts">
import { AppColors } from '~/types/enums';

withDefaults(defineProps<{
  icon: string
  count?: string | number
}>(), {
  count: 0
})
</script>

<template>
  <div class="badge">
    <v-icon size="20" :color="AppColors.VIVID_ORANGE">
      {{ icon }}
    </v-icon>
    <span class="badge__count">{{ count }}</span>
  </div>
</template>



<style scoped lang="scss">
@import "../../assets/style/main.scss";

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  box-shadow: $burntOrangeShadow;
  position: relative;

  &__count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: $white;
    border-radius: 50%;
    background-color: $dodgerBlue;
    top: -8px;
    right: -6px;
  }
}
</style>