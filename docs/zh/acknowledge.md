# 鸣谢

Fluent M3U8 发展至今，离不开各位的支持，衷心感谢每一位为 Fluent M3U8 做出贡献的小伙伴。

## 使用的开源项目

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const projects = [
  {
    avatar: 'https://qfluentwidgets.com/img/logo.png',
    name: 'QFluentWidgets',
    title: '强大、可扩展、美观优雅的 Qt 组件库',
    links: [
      { icon: 'github', link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets' },
    ],
  },
  {
    avatar: '/img/M3U8DL.png',
    name: 'N_m3u8DL-RE',
    title: '跨平台的 DASH/HLS/MSS 下载工具',
    links: [
      { icon: 'github', link: 'https://github.com/nilaoda/N_m3u8DL-RE' },
    ],
  },
]

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/65096819?v=4',
    name: 'zhiyiYo',
    title: '总开发 / 总设计 / 创始人',
    links: [
      { icon: 'github', link: 'https://github.com/zhiyiYo/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/471587058' },
    ],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/87308195?v=4',
    name: 'XiaoYouChR',
    title: '友情测试',
    links: [
      { icon: 'github', link: 'https://github.com/XiaoYouChR' },
      { icon: 'bilibili', link: '«https://space.bilibili.com/437313511' },
    ],
  },
]
</script>


<VPTeamMembers size="small" :members="projects" />

## 开发组成员
同时感谢我们的开发组成员，他们同样为了 Fluent M3U8 项目开发添砖加瓦。

<VPTeamMembers size="small" :members="members" />
