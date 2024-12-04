import { defineStore } from 'pinia';
import type { IStore, IActions } from './models';

export const useStore = defineStore<
'store', IStore, {}, IActions
>({
  id: 'store',
  state: (): IStore => ({
    // По умолчанию пользователь не авторизован
    isAuth: false,
    // Язык по умолчанию — украинский
    appLang: 'UKR',
    // Имя пользователя по умолчанию
    userFullName: 'Байда Вишневецький',
    // почта пользователя
    userEmail: '',
    // телефон пользователя
    userPhone: '',
    // аватар пользователя
    userPhoto: '',
    // Разделы курсов с уроками полученные от сервера
    // TODO: добавить action для получения курсов от сервера
    trainingSections: [
      {
        sectionId: 1,
        sectionName: 'Розділ 1',
        description: 'Почніть навчання',
        lessons: [
          {
            lessonId: 1,
            lessonName: 'Урок 1',
            description: 'Cześć',
            img: '/img/img-1.jpeg'
          },
          {
            lessonId: 2,
            lessonName: 'Урок 2',
            description: 'Moje imię',
            img: '/img/img-2.png'
          },
          {
            lessonId: 3,
            lessonName: 'Урок 3',
            description: 'Jak się masz?',
            img: '/img/img-3.png'
          },
          {
            lessonId: 4,
            lessonName: 'Урок 4',
            description: 'Co robisz?',
            img: '/img/img-4.png'
          },
          {
            lessonId: 5,
            lessonName: 'Урок 5',
            description: 'Moje imię',
            img: '/img/img-5.png'
          }
        ]
      },
      {
        sectionId: 2,
        sectionName: 'Розділ 2',
        description: 'Почніть навчання',
        lessons: [
          {
            lessonId: 1,
            lessonName: 'Урок 1',
            description: 'Cześć',
            img: '/img/img-1.jpeg'
          },
          {
            lessonId: 2,
            lessonName: 'Урок 2',
            description: 'Moje imię',
            img: '/img/img-2.png'
          },
          {
            lessonId: 3,
            lessonName: 'Урок 3',
            description: 'Jak się masz?',
            img: '/img/img-3.png'
          },
          {
            lessonId: 4,
            lessonName: 'Урок 4',
            description: 'Co robisz?',
            img: '/img/img-4.png'
          },
          {
            lessonId: 5,
            lessonName: 'Урок 5',
            description: 'Moje imię',
            img: '/img/img-5.png'
          }
        ]
      },
      {
        sectionId: 3,
        sectionName: 'Розділ 3',
        description: 'Почніть навчання',
        lessons: [
          {
            lessonId: 1,
            lessonName: 'Урок 1',
            description: 'Cześć',
            img: '/img/img-1.jpeg'
          },
          {
            lessonId: 2,
            lessonName: 'Урок 2',
            description: 'Moje imię',
            img: '/img/img-2.png'
          },
          {
            lessonId: 3,
            lessonName: 'Урок 3',
            description: 'Jak się masz?',
            img: '/img/img-3.png'
          },
          {
            lessonId: 4,
            lessonName: 'Урок 4',
            description: 'Co robisz?',
            img: '/img/img-4.png'
          },
          {
            lessonId: 5,
            lessonName: 'Урок 5',
            description: 'Moje imię',
            img: '/img/img-5.png'
          }
        ]
      }
    ],
    // Список изучаемых языков пользователя
    // TODO: добавить action для получения списка получаемых языков пользователя
    studyLanguage: [
      {
        value: 'pl',
        label: {
          level: 'B2',
          theme: 'Лікар',
          label: 'Польська',
          flag: '/img/poland-flag.png'
        }
      },
      {
        value: 'en',
        label: {
          level: 'A1',
          theme: 'Дім',
          label: 'Aнглійська',
          flag: '/img/english-flag.png'
        }
      },
    ]
  }),
  getters: {
    getIsAuth(state) {
      return state.isAuth
    },
    getFullName(state) {
      return state.userFullName
    },
    getUserPhoto(state) {
      return state.userPhoto
    },
    getTrainingSections(state) {
      return state.trainingSections
    },
    getStudyLanguage(state) {
      return state.studyLanguage
    }
  },
  actions: {
    setIsAuth(flag: boolean) {
      this.isAuth = flag
    },
    setFullName(fullName: string) {
      this.userFullName = fullName
    },
    setEmail(email: string) {
      this.userEmail = email
    },
    setPhone(phone: string) {
      this.userPhone = phone
    },
    setUserPhoto(photo: string){
      this.userPhoto = photo
    },
    // Очищает информацию о пользователе
    clearUserInfo() {
      this.isAuth = false
      this.userEmail = ''
      this.userPhone = ''
      this.userPhoto = ''
    }
  },
  persist: true,
});