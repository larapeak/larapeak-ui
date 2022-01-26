import { defineClientAppEnhance } from '@vuepress/client'
import LarapeakBadge from '../../src/components/badge/Badge.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('LarapeakBadge', LarapeakBadge)
})