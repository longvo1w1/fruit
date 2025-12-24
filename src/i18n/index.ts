import { computed, reactive } from 'vue'
import type { Locale } from './messages'
import { messages } from './messages'

type I18nState = { locale: Locale }

const STORAGE_KEY = 'fruit_locale'

const state = reactive<I18nState>({
  locale: (localStorage.getItem(STORAGE_KEY) as Locale) || 'vi'
})

export function setLocale(locale: Locale) {
  state.locale = locale
  localStorage.setItem(STORAGE_KEY, locale)
}

function getByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj)
}

/** interpolate {price}, {count}, ... */
function interpolate(text: string, params?: Record<string, any>) {
  if (!params) return text
  return text.replace(/\{(\w+)\}/g, (_, k) =>
    params[k] !== undefined ? String(params[k]) : `{${k}}`
  )
}

export function useI18n() {
  const t = (key: string, params?: Record<string, any>) => {
    const val = getByPath(messages[state.locale], key)
    if (typeof val === 'string') {
      return interpolate(val, params)
    }
    return key
  }

  return {
    locale: computed(() => state.locale),
    setLocale,
    t
  }
}
