import {
  type DefaultTheme,
  type HeadConfig,
  type LocaleConfig,
} from 'vitepress'
import * as common from './common'

export const title = 'Vue Macros'
export const description = 'Explore more macros and syntax sugar to Vue.'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Guide', link: '/guide/getting-started', activeMatch: 'guide' },
  { text: 'Macros', link: '/macros/', activeMatch: 'macros' },
  { text: 'Features', link: '/features/hoist-static', activeMatch: 'features' },
]

export const sidebar = common.sidebar('')

export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,

  footer: {
    message: 'Made with ❤️',
    copyright:
      'MIT License © 2022-PRESENT <a href="https://github.com/sxzz">三咲智子 Kevin Deng</a>',
  },
  editLink: {
    pattern: 'https://github.com/vue-macros/vue-macros/edit/main/docs/:path',
    text: 'Edit this page on GitHub',
  },
  nav,
  sidebar,
}

export const head: HeadConfig[] = [
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:description', content: description }],
  ...common.head,
]

export const en: LocaleConfig<DefaultTheme.Config>[string] = {
  label: 'English',
  lang: 'en',
  title,
  description,
  head,
  themeConfig,
}
