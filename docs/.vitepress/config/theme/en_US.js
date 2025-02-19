const enUSThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: 'Home', link: '/' },
        { text: 'Download', link: '/download' },
        { text: 'Docs', link: '/quick-start' },
        { text: 'Support', link: '/support' },
        { text: 'Acknowledge', link: '/acknowledge' },
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
        copyright: '© 2025 Shokokawaii Inc. All rights reserved.'
    }
}

export default enUSThemeConfig