<script setup lang="ts">
import { AppColors } from '~/types/enums';

const menu = [
  {
    page: '/studies',
    name: 'Навчання',
    icon: 'mdi mdi-school'
  },
  {
    page: '/favorites',
    name: 'Обране',
    icon: 'mdi mdi-star'
  },
  {
    page: '/learning-plan',
    name: 'План навчання',
    icon: 'mdi mdi-book-account'
  },
  {
    page: '/profile',
    name: 'Профіль',
    icon: 'mdi mdi-account-circle'
  }
]
</script>

<template>
  <div>
    <main>
      <slot />
    </main>
    <v-layout style="height: 83px;">
      <v-bottom-navigation
        style="height: 83px; width: 100%;"
        class="navigation container"
      >
        <NuxtLink 
          v-for="({ page, name, icon }) in menu"
          :key="icon"
          :to="page" 
          class="nav-link"
        >
          <v-icon 
            size="20" 
            :color="AppColors.TAUPE"
          >
            {{ icon }}
          </v-icon>
          <span>{{ name }}</span>
        </NuxtLink>
      </v-bottom-navigation>
    </v-layout>
  </div>

</template>


<style scoped lang="scss">
@import "../assets/style/main.scss";

.navigation {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

:deep(.v-bottom-navigation__content) {
  margin-top: 7px;
  justify-content: space-between;
  padding: 0 16px;
}

:deep(.v-bottom-navigation--active) {
  box-shadow: $midnightMistShadow !important;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & span {
    color: $taupe;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
}

.router-link-active > span {
  color: $vividOrange;
}

.router-link-active {
  :deep(.v-icon) {
    color: $vividOrange !important;
    caret-color: $vividOrange !important;
  }
}

</style>