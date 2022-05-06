---
title: Mime
lang: zh-CN
editLink: true
navbar: true
sidebar: true
---

[[toc]]

<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>


# {{ $frontmatter.title }}

我的


This is a .md using a custom component

<CustomComponent />

---


<!-- <script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>
{{ page }}
</pre> -->


::: v-pre
`{{ This will be displayed as-is }}`
:::

