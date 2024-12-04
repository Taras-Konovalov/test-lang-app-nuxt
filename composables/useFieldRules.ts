interface FieldRulesComposition {
  required: (v: string | number) => boolean | string
  isEmail: (v: string) => boolean | string
  isPhone: (v: string) => boolean | string
  isPassword: (v: string) => boolean | string
}

export function useFieldRules(): FieldRulesComposition {
  const required = (v: string | number | string[]) => {
    if (Array.isArray(v)) {
      return v.length > 0 || "Це поле обов'язкове"
    }
    return (!!v || v === 0) || "Це поле обов'язкове"
  }

  const isEmail = (v: string) => {
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(v) || 'Не вірна електронна пошта'
  }

  const isPhone = (v: string) => {
    if (!/^\+?1?\d{9,15}$/.test(v)) return 'Не вірний номер'

    return true
  }

  const isPassword = (v: string) => {
    if (v.length < 8)
      return 'Пароль має буди не менше 8 символів'

    if (!/[A-Z]/.test(v))
      return 'Пароль має містити хоча б одну зоголовну літеру'

    if (!/[a-z]/.test(v))
      return 'Пароль має містити хоча б одну маленьку літеру'

    if (!/\d/.test(v))
      return 'Пароль має містити хоча б одну цифру'

    if (!/[!@#$%^&*(),.?":{}|<>=+'№^?~-]/.test(v))
      return 'Пароль має містити хоча б один спецсимвол'

    return true
  }

  return {
    required,
    isEmail,
    isPhone,
    isPassword
  }
}
