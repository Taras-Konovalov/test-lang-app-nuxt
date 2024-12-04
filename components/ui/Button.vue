<script setup lang="ts">

withDefaults(defineProps<{
  label: string
  view: 'primary' | 'link'
}>(), {
  view: 'primary'
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button 
    @click="emit('click')"
    :class="['btn', `btn_${view}`]"
  >
    {{ label }}
  </button>
</template>


<style scoped lang="scss">
@import "../../assets/style/main.scss";

.btn {
  border: none;
  cursor: pointer;
  outline: none;

  &_primary {
    background-color: $vividOrange;
    color: $white;
    height: 56px;
    border-radius: 8px;

    &:hover {
      color: $vividOrange;
      background-color: $white;
      transition: all .3s ease-in-out;
      border: 1px solid $vividOrange;
    }

    &:disabled {
      opacity: 0.6;
      cursor: default;
      pointer-events: none;
    }
  }

  &_link {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: dodgerBlue;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>