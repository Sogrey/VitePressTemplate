module.exports = {
    lang: "zh-CN",
    title: "vitepress-template",
    description: "VitePress 是 VuePress 的小弟弟，在 Vite 上构建的，并且有所改进。",
    base: "/VitePressTemplate/",
    markdown: {
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    },
    repo: 'Sogrey/VitePressTemplate',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/img/favicon.ico',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about/' },
        ],
        //   侧边导航
        sidebar: [
            { text: '我的', link: '/mine/' }
        ]
    }
}