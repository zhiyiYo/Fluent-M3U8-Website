import { defineConfig } from 'vitepress'
import headConfig from './config/head'
import zhCNThemeConfig from './config/theme/zh_CN'
import enUSThemeConfig from './config/theme/en_US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fluent M3U8",
  description: "Cross-platform M3U8 Downloader",
  head: headConfig,
  themeConfig: enUSThemeConfig,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: zhCNThemeConfig
    }
  },
  sitemap: {
    hostname: 'https://fluent-meu8.org'
  }
})
