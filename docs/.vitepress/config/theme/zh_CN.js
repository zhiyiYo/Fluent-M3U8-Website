const zhCNThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: '主页', link: '/zh/' },
        { text: '下载', link: '/zh/download' },
        { text: '文档', link: '/zh/quick-start' },
        { text: '支持', link: '/zh/support' },
        { text: '鸣谢', link: '/zh/acknowledge' },
        { text: '组件库', link: 'https://qfluentwidgets.com/zh/' },
    ],

    sidebar: [
        {
            text: '',
            items: [
                { text: '快速上手', link: '/zh/quick-start' },
                { text: '下载', link: '/zh/download' },
                { text: '支持', link: '/zh/support' },
                { text: '鸣谢', link: '/zh/acknowledge' },
            ]
        }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/zhiyiYo/Fluent-M3U8' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/471587058' },
        { icon: 'kofi', link: 'https://ko-fi.com/zhiyiYo' },
        { icon: 'afdian', link: 'https://afdian.com/a/zhiyiyo' },
    ],

    footer: {
        message: `<div style="display: flex; justify-content: center; margin-bottom: 10px">
                  <img src="/logo.png" style="height: 24px; width: 24px" alt="logo">
                  <div style="font-size: 16px; font-weight: 600; padding-left: 8px">Fluent M3U8</div>
                </div>`,
        copyright: '版权所有 © 2025 Shokokawaii Inc.'
    },
    
    search: {
        provider: 'algolia',
        options: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        }
    }
}

export default zhCNThemeConfig