---
outline: deep
---

<Img />

<MonacoEditor />
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

<script setup>
import { useData } from 'vitepress'
import { inBrowser } from 'vitepress';
import { defineAsyncComponent } from 'vue';

const { site, theme, page, frontmatter } = useData()

import Img from './.vitepress/components/Img.vue'

const MonacoEditor = inBrowser
  ? defineAsyncComponent(() => import('.vitepress/components/monaco.vue'))
  : () => null;
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
