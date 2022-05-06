---
title: About me
lang: zh-CN
---

[[toc]]

## About 

关于页面


::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

---

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

----

```js
export default {
  name: 'MyComponent',
  // ...
}
```


```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

---

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```


---

``` markdown
# Sogrey

#### Description
{**When you're done, you can delete the content in this README and update the file with details for others getting started with your repository**}

#### Software Architecture
Software architecture description

#### Installation

1. xxxx
2. xxxx
3. xxxx

#### Instructions

1. xxxx
2. xxxx
3. xxxx

#### Contribution

1. Fork the repository
2. Create Feat_xxx branch
3. Commit your code
4. Create Pull Request
```
