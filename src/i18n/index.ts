import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "@/lang/en";
import axios from 'axios';


Vue.use(VueI18n)

function cleanupLocal(): string {
  const match = navigator.language.match(/([a-z]+)(-.*)?/);
  return match ? match[1] : 'en';
}

const i18n = new VueI18n({
  locale: cleanupLocal(),
  fallbackLocale: 'en',
  messages
})

const loadedLanguages = ['en'];

function setI18nLanguage(lang: string) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document?.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

function importLanguage(lang: string) {
  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}

export function loadLanguageAsync(lang: string): Promise<string> {
  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  return importLanguage(lang);
}

importLanguage(i18n.locale)

export default i18n;