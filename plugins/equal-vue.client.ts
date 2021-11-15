import { defineNuxtPlugin } from '#app'
import { Button, Toggle } from 'equal-vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Button).use(Button).use(Toggle)
})