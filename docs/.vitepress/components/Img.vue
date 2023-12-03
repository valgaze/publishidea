<template>
  <el-alert
    title="😥 Token is INVALID (generate a new token and try again)"
    type="error"
  >
  </el-alert>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useData } from "vitepress";
const { isDark } = useData();
const { url } = defineProps(["url"]);
</script>

<style scoped>
.blurred {
  cursor: not-allowed;
  padding: 1px 0;
  filter: blur(1.15px);
  pointer-events: none;
}
</style>
