<template>
  <img
    v-if="url"
    :src="url"
    :style="{ filter: isDark ? 'invert(1)' : 'none' }"
    style="
      margin: 1rem 0px;
      display: inline-block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
    "
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useData } from "vitepress";
const { isDark } = useData();
const { url } = defineProps(["url"]);
</script>
