const zhCNThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: '主页', link: '/zh/' },
        { text: '下载', link: '/zh/download' },
        { text: '文档', link: '/zh/quick-start' },
        { text: '支持', link: '/zh/support' },
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
                { text: '更新日志', link: '/zh/changelog' },
            ]
        }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/zhiyiYo/Fluent-M3U8' },
        { icon: 'bilibili', link: 'https://www.bilibili.com/video/BV1SHNDebE2d' },
        { icon: 'kofi', link: 'https://ko-fi.com/zhiyiYo' },
        { icon: 'afdian', link: 'https://afdian.com/a/zhiyiyo' },
    ],

    footer: {
        message: `根据 GPLv3 许可证进行授权`,
        copyright: '版权所有 © 2025 Shokokawaii Inc.'
    },

    // search: {
    //     provider: 'algolia',
    //     options: {
    //         appId: 'YFA42XFQML',
    //         apiKey: 'eaabaf0ba3a3a3d65eda5cdc8c94c3a7',
    //         indexName: 'fluent-m3u8'
    //     }
    // }
}

export default zhCNThemeConfig