import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  bundler: '@vuepress/bundler-vite',
  
  // site config
  lang: 'en-US',
  title: 'Larapeak UI',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'larapeak/larapeak-ui',
    repoLabel: 'Contribute!',
    docsBranch: 'master',
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/larapeak/larapeak-ui' }
    ],
    sidebar: [
      {
        text: 'Guide',
        children: [
          'install'
        ],
      },
      {
        text: 'Components',
        children: [
          { text: 'Badge', link: '/components/badge/badge' },
        ],
      }
    ],
  },
})