import { useStore } from '~/stores/useStore'

export default defineNuxtRouteMiddleware(() => {
  const store = useStore();

  if (!store.isAuth) {
    return navigateTo('/'); // Редирект на стартовую страницу
  }
});