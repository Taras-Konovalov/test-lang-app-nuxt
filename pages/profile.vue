<script setup lang="ts">
import { useStore } from '~/stores/useStore';
import { AppColors } from '~/types/enums';

useHead({
  // Устанавливаем заголовок страницы
  title: 'Профіль | LanguageApp — персональні налаштування',
  htmlAttrs: {
    // Устанавливаем язык документа
    lang: 'uk'
  },
  meta: [
    // Мета-описание страницы для поисковых систем
    {
      name: 'description',
      content: 'Профіль користувача у LanguageApp. Налаштовуйте мову додатку, змінюйте пароль та налаштуйте сповіщення для кращого досвіду використання.'
    },
    // Ключевые слова для улучшения релевантности страницы
    {
      name: 'keywords',
      content: 'LanguageApp, профіль, налаштування, мова, сповіщення, зміна пароля'
    },
    // Указываем, что страницу можно индексировать и переходить по ссылкам
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph теги для социальных сетей
    {
      property: 'og:title',
      content: 'Профіль | LanguageApp — персональні налаштування'
    },
    {
      property: 'og:description',
      content: 'Персоналізуйте свій досвід використання LanguageApp. Змініть мову, пароль або налаштуйте сповіщення для максимальної зручності.'
    },
    {
      property: 'og:type',
      content: 'website' // Указываем, что это веб-сайт
    },
    {
      property: 'og:url',
      content: 'https://languageapp.com/profile' // URL страницы профиля
    },
    {
      property: 'og:image',
      content: 'https://sanako.com/wp-content/uploads/2022/03/Online-Learning-App-Female-Using-Smartphone-Application-For-Studying-Foreign-Languages-Cropped-min.jpg' // Ссылка на изображение для предпросмотра в соцсетях
    },
    // Twitter Card теги для отображения карточек в Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image' // Указываем формат отображения карточки
    },
    {
      name: 'twitter:title',
      content: 'Профіль | LanguageApp — персональні налаштування'
    },
    {
      name: 'twitter:description',
      content: 'Налаштуйте профіль у LanguageApp. Персоналізуйте додаток під себе, змініть мову та налаштуйте сповіщення.'
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

// Массив настроек для отображения в списке профиля.
// Каждая опция включает текст кнопки (text) и действие (action), которое будет выполняться при нажатии.
const options = ref([
  { text: 'Мова застосунку', data: store.appLang === 'UKR' ? 'Українська' : 'English', action: selectLanguage },
  { text: 'Змінити пароль', action: changePassword },
  { text: 'Нотіфікації', action: setNotifications},
  { text: 'Запросити друзів', action: inviteFriends },
]);

// TODO: добавить модальное или страницу для изменения данных пользователя, при необходимости заменить заглушки (console.log) на реальную функциональность.
function editUserInfo() {
  console.log('Открытие формы для изменения даных пользователя')
}

// выход из профиля
function logout() {
  store.clearUserInfo()

  if (!store.isAuth) {
    navigateTo('/');
  }
}

// TODO: добавить модальное окно или expansion panel для смены языка, при необходимости заменить заглушку (console.log) на реальную функциональность.
function selectLanguage() {
  console.log('Переход к выбору языка');
}

// TODO: добавить модальное окно или expansion panel для формы изменения пароля, при необходимости заменить заглушку (console.log) на реальную функциональность.
function changePassword() {
  console.log('Открытие формы для изменения пароля');
}

// TODO: добавить модальное окно или expansion panel для настройки уведомлений, при необходимости заменить заглушку (console.log) на реальную функциональность.
function setNotifications() {
  console.log('Настройка уведомлений');
}

// TODO: добавить переход к приглашению друзей, при необходимости заменить заглушку (console.log) на реальную функциональность.
function inviteFriends() {
  console.log('Переход к приглашению друзей');
}

// TODO: добавить модальное окно или переход на страницу с правовой информацией, при необходимости заменить заглушку (console.log) на реальную функциональность.
function openLegalInformation() {
  console.log('Открыть правовую инфомацию')
}
</script>

<template>
  <div class="container profile-page">
    <section class="profile-page__userInfo">
      <div class="profile-page__userInfo__actions">
        <v-icon 
          size="18" 
          :color="AppColors.VIVID_ORANGE"
          @click="editUserInfo"
        >
          mdi mdi-pencil
        </v-icon>
        <v-icon 
          size="18"
          :color="AppColors.VIVID_ORANGE" 
          @click="logout"
        >
          mdi mdi-logout
        </v-icon>
      </div>
      <div class="profile-page__userInfo__avatar">
        <img
          v-if="store.userPhoto"
          :src="store.userPhoto" 
          alt="avatar"
        >
        <DefaultAvatar v-else />
      </div>
      <span class="profile-page__userInfo__user-name">
        {{ store.userFullName }}
      </span>
      <span v-if="store.userEmail" class="profile-page__userInfo__user-email">
        {{ store.userEmail }}
      </span>
      <span v-if="store.userPhone" class="profile-page__userInfo__user-phone">
        {{ store.userPhone }}
      </span>
      <span class="profile-page__userInfo__user-subscribe">
        Наступне поновлення підписки 20.05.2024
      </span>
    </section>

    <section class="profile-page__profile-actions">
      <ProfileOptionBtn
        v-for="({ text, data, action }) in options"
        :key="text"
        :label="text"
        @click="action"
        :data="data"
      />
    </section>
    <Button
      label="Правова інформація"
      view="link"
      @click="openLegalInformation"
      style="align-self: flex-start;"
    />
  </div>
</template>



<style scoped lang="scss">
@import "../assets/style/main.scss";

.profile-page {
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  &__userInfo {
    display: flex;
    flex-direction: column;
    background-color: $white;
    border-radius: 16px;
    box-shadow: $smokeGrayShadow;
    padding: 16px 16px 20px 16px;
    margin-bottom: 32px;

    &__actions {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &__avatar {
      align-self: center;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid $peachCream;
      background-color: $paleBlue;
      margin-bottom: 20px;

      & svg {
        width: 100%;
        height: 100%;
      }

      & img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__user-name {
      align-self: center;
      font-size: 24px;
      line-height: 28px;
      font-weight: 700;
      color: $gunmetal;
      margin-bottom: 8px;
    }

    &__user-email, &__user-phone {
      align-self: center;
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      color: $chestnut;
      margin-bottom: 8px;
    }

    &__user-subscribe {
      align-self: center;
      margin-top: 20px;
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      color: $gray;
    }
  }

  &__profile-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }
}
</style>