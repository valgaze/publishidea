---
outline: deep
---

<TokenInput :showInfo="true" />
<Img />

<Blur :shouldBlur="!store.state.tokenValid">
  <MonacoEditor />
</Blur>

<!-- <SendMsg /> -->

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).

<script setup>
import { useData } from 'vitepress'
import { inBrowser } from 'vitepress';
import { defineAsyncComponent, inject, onMounted } from 'vue';
import Img from './.vitepress/components/Img.vue'
import TokenInput from './.vitepress/components/token_handler.vue'
import { useCustomStore } from './.vitepress/util/store'

import Blur from './.vitepress/components/blur.vue'
// import SendMsg from './.vitepress/components/SendMsg.vue'
// import Img from './docs/.vitepress/components/Img.vue'
// import SpeedyCardEditor from './docs/.vitepress/components/SpeedyCardEditor.vue'


const store = useCustomStore();

const { site, theme, page, frontmatter } = useData()

const MonacoEditor = inBrowser
  ? defineAsyncComponent(() => import('.vitepress/components/monaco.vue'))
  : () => null;

</script>
