<script setup lang="ts">
import SmallArrow from './svg/SmallArrow.vue';
import type { LanguageItem } from '~/stores/useStore/models'

defineProps<{
  options: LanguageItem[]
  modelValue: LanguageItem | null
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', option: LanguageItem | null): void;
  (e: 'onSelect'): void;
}>();

const selectedOption = ref<LanguageItem | null>(null)
const isDropdownVisible = ref(false)
const dropDown = ref<HTMLElement | null>(null)

function toggleOptions(option: LanguageItem) {
  selectedOption.value = option
  emits('update:modelValue', option)
  emits('onSelect')
  isDropdownVisible.value = false
}

function closeDropDown(event: Event) {
  if (dropDown?.value && !dropDown?.value.contains(event.target as Node)) {
    isDropdownVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown)
})
</script>

<template>
  <div
    class="dropdown-wrapper"
    ref="dropDown"
  >
    <button
      class="dropdown-selected-options"
      @click="isDropdownVisible = !isDropdownVisible"
      :class="{ 'drop-down-visible': isDropdownVisible }"
    >
      <div class="flag-wrapper">
        <img :src="modelValue?.label.flag" alt="flag">
      </div>
      <div class="lang-info">
        <div class="lang-info__top">
          <span class="lang-name">{{ modelValue?.label.label }}</span>
          <div
            class="icon"
            :class="{'icon-rotate': isDropdownVisible}"
          >
            <SmallArrow />
          </div>
        </div>
        <span class="lang-lvl">
          {{
            `${modelValue?.label.theme} (${modelValue?.label.level})`
          }}
        </span>
      </div>
    </button>
    <transition name="slide-fade">
      <div
        v-if="isDropdownVisible"
        class="options-wrapper"
      >
        <button
          v-for="lang in options"
          :key="lang.value"
          class="option"
          :class="{'selected-option': lang?.value === modelValue?.value}"
          @click="toggleOptions(lang)"
        >
          {{ lang.label.label}}
        </button>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/main.scss";

.dropdown-wrapper {
  position: relative;
  max-width: 192px;
  width: 100%;
  cursor: pointer;

  & .dropdown-selected-options {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    cursor: pointer;
    border-radius: 8px;

    & .flag-wrapper {
      min-width: 44px;
      width: 44px;
      height: 44px;
      overflow: hidden;
      border-radius: 50%;

      & > img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }

    & .lang-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__top {
        display: flex;
        align-items: center;
        gap: 3px;

        & .lang-name {
          font-size: 22px;
          font-weight: 600;
          line-height: 26.25px;
          color: $dodgerBlue;
        }

        & .icon {
          width: 24px;
          height: 24px;
          transition: 250ms all cubic-bezier(.17,.67,.83,.67);

          &.icon-rotate {
            transform: rotate(180deg);
          }
        }
      }

      & .lang-lvl {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.09px;
        color: $gunmetal;
      }
    }

    &.drop-down-visible {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  & .options-wrapper {
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $white;
    border-radius: 8px;
    max-height: 160px;
    overflow-y: auto;
    overflow-x: hidden;
    border-top: none;
    box-shadow: $dimBlackShadow;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: $vividOrange;
      border-radius: 20px;
      border: 1px solid black;
    }

    & .option {
      display: flex;
      justify-content: flex-start;
      border: none;
      cursor: pointer;
      padding: 10px 8px 10px 16px;

      &:hover, &:active {
        color: $slateGray;
      }

      &.selected-option {
        color: $dodgerBlue;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: 250ms all cubic-bezier(.17,.67,.83,.67);
}

.slide-fade-leave-active {
  transition: 250ms all cubic-bezier(.17,.67,.83,.67);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}
</style>
