export interface Label {
  level: string;
  theme: string;
  label: string;
  flag: string
}

export interface LanguageItem {
  value: string;
  label: Label;
}

// Интерфейс для описания урока
export interface Lesson {
  lessonId: number;
  lessonName: string;
  description: string;
  img: string;
}

// Интерфейс для описания раздела курса
export interface Section {
  sectionId: number;
  sectionName: string;
  description: string;
  lessons: Lesson[];
}

// Основной интерфейс состояния хранилища
export interface IStore {
  isAuth: boolean
  appLang: 'UKR' | 'EN'
  userFullName: string
  userEmail: string
  userPhone: string
  userPhoto: string
  trainingSections: Section[]
  studyLanguage: LanguageItem[]
}

// Интерфейс для описания actions, доступных в хранилище
export interface IActions {
  setIsAuth(flag: boolean): void
  setFullName(fullName: string): void
  setEmail(email: string):void
  setPhone(phone: string): void
  setUserPhoto(photo: string): void
  clearUserInfo(): void
}