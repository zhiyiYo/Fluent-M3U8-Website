const enUSThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: 'Home', link: '/' },
        { text: 'Download', link: '/download' },
        { text: 'Docs', link: '/quick-start' },
        // { text: 'Support', link: '/support' },
        // { text: 'Acknowledge', link: '/acknowledge' },
        { text: 'QFluentWidgets', link: 'https://qfluentwidgets.com' },
    ],

    sidebar: [
        {
            text: '',
            items: [
                { text: 'Getting Started', link: '/quick-start' },
                { text: 'Download', link: '/download' },
                { text: 'Support', link: '/support' },
                { text: 'Acknowledge', link: '/acknowledge' },
                { text: 'Changelog', link: '/changelog' },
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
        message: `Released under GPLv3 License`,
        copyright: '© 2025 Shokokawaii Inc. All rights reserved.'
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

export default enUSThemeConfig