<script setup lang="ts">
import { useStore } from '~/stores/useStore';
import { AppColors } from '~/types/enums'

useHead({
  // Устанавливаем заголовок страницы
  title: 'Вхід | LanguageApp — вивчення іноземних мов',
  htmlAttrs: {
    // Устанавливаем язык документа
    lang: 'uk'
  },
  meta: [
    // Мета-описание страницы для поисковых систем
    {
      name: 'description',
      content: 'Вхід у LanguageApp — платформу для вивчення іноземних мов. Почніть навчатися з безкоштовними уроками прямо зараз!'
    },
    // Ключевые слова для улучшения релевантности страницы в поисковых системах
    {
      name: 'keywords',
      content: 'LanguageApp, вивчення мов, вхід, онлайн навчання, іноземні мови'
    },
    // Указываем, что страницу можно индексировать и переходить по ссылкам
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph теги для корректного отображения в социальных сетях
    {
      property: 'og:title',
      content: 'Вхід | LanguageApp — вивчення іноземних мов'
    },
    {
      property: 'og:description',
      content: 'Почніть вивчення мов з LanguageApp! Увійдіть у свій акаунт, щоб отримати доступ до безкоштовних уроків та підписки.'
    },
    {
      property: 'og:type',
      content: 'website' // Указываем, что это веб-сайт
    },
    {
      property: 'og:url',
      content: 'https://languageapp.com/' // URL страницы входа
    },
    {
      property: 'og:image',
      content: 'https://sanako.com/wp-content/uploads/2022/03/Online-Learning-App-Female-Using-Smartphone-Application-For-Studying-Foreign-Languages-Cropped-min.jpg' // Ссылка на изображение для предпросмотра в соцсетях
    },
    // Twitter Card теги для корректного отображения в Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image' // Указываем формат отображения карточки
    },
    {
      name: 'twitter:title',
      content: 'Вхід | LanguageApp — вивчення іноземних мов'
    },
    {
      name: 'twitter:description',
      content: 'Увійдіть у свій акаунт LanguageApp і почніть навчання з безкоштовними уроками прямо зараз!'
    },
    {
      name: 'twitter:image',
      content: 'https://sanako.com/wp-content/uploads/2022/03/Online-Learning-App-Female-Using-Smartphone-Application-For-Studying-Foreign-Languages-Cropped-min.jpg' // Ссылка на изображение для Twitter
    }
  ]
});

// правила для валидации полей
const fieldRules = useFieldRules()
const store = useStore();

// флаг, валидна форма или нет
const valid = ref<boolean>(true)
// флаг, выбрана почта или телефон
const isEmail = ref<boolean>(true)
// почта пользователя
const email = ref<string>('')
// телефон пользователя
const phone = ref<string>('')
// пароль пользователя
const password = ref<string>('')

// переключаем поле с почты на телефон и обратно
function selectEmailOrPhone() {
  isEmail.value = !isEmail.value
  email.value = ''
  phone.value = ''
}

// Отправка формы, вход с систему
// TODO: добавить запрос API на вход
function handleSubmitLogin() {

  if (isEmail.value && email.value) {
    store.setEmail(email.value)
  }

  if (!isEmail.value && phone.value) {
    store.setPhone(phone.value)
  }

  isEmail.value = true
  email.value = ''
  phone.value = ''

  store.setIsAuth(true)

  if (store.isAuth) {
    navigateTo('/profile');
  }
}

// TODO: при необходимости заменить заглушку (console.log) на реальную функциональность
function fogotPassword() {
  console.log('Забув пароль?')
}

// TODO: при необходимости заменить заглушку (console.log) на реальную функциональность
function createAccount() {
  console.log('Створити безкоштовно')
}

// TODO: при необходимости заменить заглушку (console.log) на реальную функциональность
function logInWithFaceBook() {
  console.log('Увійти через Facebook')
}

// TODO: при необходимости заменить заглушку (console.log) на реальную функциональность
function logInWithGoogle() {
  console.log('Увійти через Google')
}
</script>

<template>
  <section class="container auth-section-header">
    <p class="auth-section-header__title">
      Вхід
    </p>
    <p class="auth-section-header__subtite">
      Привіт! Раді знову тебе бачити.
    </p>
  </section>
  <section class="container auth-section-form">
    <v-form
      v-model="valid"
      class="auth-section-form__form"
      @submit.prevent="handleSubmitLogin"
    >
      <v-text-field
        v-if="isEmail"
        v-model="email"
        variant="outlined"
        prepend-inner-icon="mdi mdi-at"
        :bg-color="AppColors.WHITE"
        :rules="[fieldRules.required, fieldRules.isEmail]"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        v-else
        v-model="phone"
        variant="outlined"
        type="number"
        prepend-inner-icon="mdi mdi-phone"
        :bg-color="AppColors.WHITE"
        :rules="[fieldRules.required, fieldRules.isPhone]"
        hide-details="auto"
      ></v-text-field>
      <span
        @click="selectEmailOrPhone"
        class="auth-section-form__form__emailOrPhoneBtn"
      >
        {{ 
          isEmail
            ? "Використати номер мобільного" 
            : "Використати електронну пошту"
        }}
      </span>
      <v-text-field
        v-model="password"
        type="password"
        variant="outlined"
        prepend-inner-icon="mdi mdi-lock"
        :bg-color="AppColors.WHITE"
        :rules="[fieldRules.required, fieldRules.isPassword]"
        hide-details="auto"
        class="auth-section-form__form__password"
      ></v-text-field>
      <Button
        label="Увійти"
        type="submit"
        view="primary"
        :disabled="!valid"
      />
    </v-form>
  </section>
  <section class="container auth-section-divider">
    <v-divider 
      :thickness="1"
      opacity="100" 
      :color="AppColors.LIGHT_GRAY"
    >
    </v-divider>
    <span>
      або
    </span>
    <v-divider 
      :thickness="1"
      opacity="100" 
      :color="AppColors.LIGHT_GRAY"
    >
    </v-divider>
  </section>
  <section class="container auth-section-facebook-google-auth">
    <FaceBookBtn @click="logInWithFaceBook"/>
    <GoogleBtn @click="logInWithGoogle"/>
  </section>
  <section class="container auth-section-footer">
    <Button
      label="Забув пароль?"
      view="link"
      @click="fogotPassword"
    />
    <div>
      <span 
        class="inline-block mr-2 cursor-default"
        :style="{ color: AppColors.TAUPE }"
      >
        Не маєте акаунту?
      </span>
      <Button
        label="Створити безкоштовно"
        view="link"
        @click="createAccount"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/style/main.scss";

.auth-section-header {
  margin-top: 21px;
  margin-bottom: 41px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__title {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: $darkCharcoal;
  }

  &__subtite {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: $taupe;
  }
}

.auth-section-form {
  margin-bottom: 59px;

  &__form {
    display: flex;
    flex-direction: column;

    &__emailOrPhoneBtn {
      width: fit-content;
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      color: dodgerBlue;
      margin-bottom: 26px;
      margin-top: 8px;
      cursor: pointer;
    }

    &__password {
      margin-bottom: 60px;
    }
  }
}

.auth-section-divider {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 59px;

  & span {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: $taupe;
  }
}

.auth-section-facebook-google-auth {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 70px;
}

.auth-section-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  margin-bottom: 30px;
}

:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
  color: $brightRed !important;
}

:deep(.v-field--error:not(.v-field--disabled) .v-field__prepend-inner > .v-icon) {
  color: $brightRed !important;
}

:deep(.v-input--error:not(.v-input--disabled) .v-input__details .v-messages) {
  color: $brightRed !important;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
}

:deep(.v-text-field .v-input__details) {
  padding-inline: 0 !important;
}

:deep(.v-input__details) {
  padding-top: 8px !important;
}

:deep(.v-field) {
  border-radius: 8px;
}
</style>