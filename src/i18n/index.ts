import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import es from './locales/es.json'
import en from './locales/en.json'

/**
 * Configuración de i18n. Para añadir un idioma nuevo:
 * 1. Crea `src/i18n/locales/<código>.json` copiando la forma de `es.json`.
 * 2. Impórtalo aquí y agrégalo a `resources`.
 * 3. Añádelo a las opciones del selector de idioma en AppSettingsDrawer.
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'app_language',
    },
  })

export default i18n
