<template>
  <div class="loading" v-if="store.loader">
    <img src="../assets/images/moon.png" alt="" />
    <div class="loading_content">
      <div class="loading_content_name">iteach</div>
      <div class="loading_content_gradient"></div>
    </div>
    <div class="loading_content">
      <div class="loading_content_name">academy</div>
      <div class="loading_content_gradient"></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~~/store/store";
const store = useStore();

</script>

<style lang="scss" scoped>
</style>