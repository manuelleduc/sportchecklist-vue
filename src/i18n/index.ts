import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "@/lang/en";
import axios from 'axios';

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

const loadedLanguages = ['en'];

function setI18nLanguage(lang: string) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html')!.setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang: string): Promise<string> {
  // If the same language
  // if (i18n.locale === lang) {
  //   return Promise.resolve(setI18nLanguage(lang))
  // }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}

export default i18n;