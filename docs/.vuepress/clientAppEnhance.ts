import { defineClientAppEnhance } from '@vuepress/client'
import BadgeExample from '../components/badge/BadgeExample.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('BadgeExample', BadgeExample)
})