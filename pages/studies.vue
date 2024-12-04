<script setup lang="ts">
import { useStore } from '~/stores/useStore';
import { AppColors } from '~/types/enums';
import type { LanguageItem } from '~/stores/useStore/models'

useHead({
  // Устанавливаем заголовок страницы
  title: 'Навчання | LanguageApp — покращуйте знання мов',
  htmlAttrs: {
    // Устанавливаем язык документа
    lang: 'uk'
  },
  meta: [
    // Мета-описание страницы для поисковых систем
    {
      name: 'description',
      content: 'Навчання у LanguageApp: проходьте уроки, відстежуйте свій прогрес і покращуйте знання іноземних мов у зручному форматі.'
    },
    // Ключевые слова для улучшения релевантности страницы
    {
      name: 'keywords',
      content: 'LanguageApp, навчання, уроки, іноземні мови, прогрес, платформа для навчання'
    },
    // Указываем, что страницу можно индексировать и переходить по ссылкам
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph теги для социальных сетей
    {
      property: 'og:title',
      content: 'Навчання | LanguageApp — покращуйте знання мов'
    },
    {
      property: 'og:description',
      content: 'Проходьте інтерактивні уроки у LanguageApp, покращуйте свій рівень знань і відстежуйте прогрес навчання.'
    },
    {
      property: 'og:type',
      content: 'website' // Указываем, что это веб-сайт
    },
    {
      property: 'og:url',
      content: 'https://languageapp.com/studies' // URL страницы обучения
    },
    {
      property: 'og:image',
      content: 'https://sanako.com/wp-content/uploads/2022/03/Online-Learning-App-Female-Using-Smartphone-Application-For-Studying-Foreign-Languages-Cropped-min.jpg' // Ссылка на изображение для соцсетей
    },
    // Twitter Card теги для отображения карточек в Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image' // Указываем формат отображения карточки
    },
    {
      name: 'twitter:title',
      content: 'Навчання | LanguageApp — покращуйте знання мов'
    },
    {
      name: 'twitter:description',
      content: 'Покращуйте знання мов із LanguageApp. Навчайтесь у будь-який час і відстежуйте свій прогрес!'
    },
    {
      name: 'twitter:image',
      content: 'https://sanako.com/wp-content/uploads/2022/03/Online-Learning-App-Female-Using-Smartphone-Application-For-Studying-Foreign-Languages-Cropped-min.jpg' // Ссылка на изображение для Twitter
    }
  ]
});

const store = useStore();

definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
  requiresAuth: true,
});

// Язык который изучает пользователь
const selectedLang = ref<LanguageItem>({
  value: 'pl',
  label: {
    level: 'B2',
    theme: 'Лікар',
    label: 'Польська',
    flag: '/img/poland-flag.png'
  }
})

// TODO: покупка подписки, при необходимости заменить заглушку (console.log) на реальную функциональность.
function getSubscribe() {
  console.log('Купити підписку')
}
</script>

<template>
  <div class="container">
    <section class="header">
      <div class="d-flex justify-space-between align-center w-100">
        <DropDownLang 
          v-model="selectedLang"
          :options="store.studyLanguage"
        />
        <Badge icon="mdi mdi-bell" count="7"/>
      </div>
      <ProgressLine value="20" />
    </section>
    <section class="divider">
      <v-divider :thickness="1" :color="AppColors.LIGHT_GRAY"></v-divider>
    </section>
    <section class="studies-subscribe">
      <div class="studies-subscribe__top">
        <SubscribeIcon style="max-width: 76px; width: 100%;"/>
        <div class="studies-subscribe__top__description">
          <span >
            Раді тебе бачити!
          </span>
          <span>
            У тебе 7 безкоштовних уроків
          </span>
          <span>
            Щоб мати необмежений доступ до навчання - оформи підписку.
          </span>
        </div>
      </div>
      <Button
        label="Купити підписку"
        view="primary"
        style="border-radius: 0; border: none;"
        @click="getSubscribe"
      />
    </section>
    <v-expansion-panels
      class="expansion-panels"
      multiple
    >
      <v-expansion-panel
        v-for="({ sectionId, sectionName, description, lessons }) in store.trainingSections"
        :key="sectionId"
      >
        <template #title>
          <div class="d-flex flex-column" style="gap: 4px;">
            <p class="section-title">
              {{ sectionName }}
            </p>
            <p class="section-description">
              {{ description }}
            </p>
          </div>
        </template>
        <template #text>
          <div class="lessons">
            <div 
              v-for="({ lessonId, lessonName, description, img }) in lessons"
              :key="lessonId"
              class="lessons__lesson"
            >
              <div class="lessons__lesson__img">
                <img :src="img" alt="lesson-img">
              </div>
              <div class="lessons__lesson__info">
                <span class="lesson-name">{{ lessonName }}</span>
                <span class="lesson-description">{{ description }}</span>
              </div>
            </div>
          </div>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/style/main.scss';

.header {
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: center;
  margin-top: 14px;
}

.divider {
  text-align: center;
  margin: 16px 0;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.studies-subscribe {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  padding-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid $vividOrange;

  &__top {
    display: flex;
    gap: 24px;
    align-items: center;
    padding: 0 16px;
    padding-bottom: 16px;

    &__description {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & span:first-child {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.09px;
        color: $taupe;
      }

      & span:nth-child(2) {
        font-size: 18px;
        font-weight: 700;
        line-height: 21.48px;
        color: $chestnut;
      }

      & span:last-child {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.09px;
        color: $gunmetal;
      }
    }
  }
}

.expansion-panels {
  gap: 8px;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  line-height: 26.25px;
  color: $chestnut;
}

.section-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.09px;
  color: $slateGray;
}

.lessons {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__lesson {
    background-color: $white;
    box-shadow: $burntOrangeShadow;
    border-radius: 16px;
    display: flex;
    align-items: center;
    height: 80px;
    overflow: hidden;
    cursor: pointer;

    &__img {
      max-width: 80px;
      width: 100%;
      height: 100%;

      & > img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      } 
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-left: 20px;

      & > .lesson-name {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.09px;
        color: $gray;
      }

      & > .lesson-description {
        font-size: 18px;
        font-weight: 700;
        line-height: 21.48px;
        color: $chestnut;
      }
    }
  }
}

:deep(.v-expansion-panel-title) {
  padding: 0 !important;
}

:deep(.v-expansion-panel__shadow) {
  box-shadow: none !important;
}

:deep(.v-expansion-panel) {
  background-color: transparent !important;
}

:deep(.v-expansion-panel-title__icon > .v-icon) {
  border-radius: 16px;
  color: $vividOrange;
  width: 50px;
  height: 50px;
  background-color: $white;
  box-shadow: $burntOrangeShadow;
}

:deep(.v-expansion-panel:not(:first-child):after) {
  display: none !important;
}

:deep(.v-expansion-panel-title) {
  min-height: 50px !important;
}

:deep(.v-expansion-panel:hover) {
  background-color: transparent !important;
}

:deep(.v-expansion-panel-text__wrapper) {
  padding: 0;
  padding-top: 8px;
}

:deep(.v-expansion-panel-title:hover > .v-expansion-panel-title__overlay) {
  opacity: 0;
}
</style>