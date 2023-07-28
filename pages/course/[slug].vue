<template>
  <div>
    <div class="course_page">
      <div class="container">
        <div class="course_top">
          <div class="course_top_title">{{ course?.name }}</div>
          <div class="course_top_text">
            {{ course?.title }}
          </div>
        </div>
        <div class="course_bottom">
          <div class="course_bottom_image">
            <img :src="course?.image" alt="" />
          </div>
          <div class="course_bottom_content">
            <div
              class="course_bottom_content_title"
              v-html="course?.description"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useStore } from "~~/store/store";
const store = useStore();
const baseUrl = useRuntimeConfig().public.baseUrl;
const route = useRoute();
const { slug } = route.params;
const course = ref(null);
async function courseApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/course/" + slug, {
    method: "GET",
  });
  course.value = data.data;
  store.loader = false;
}
courseApi();
</script>
  
  <style lang="scss" scoped>
</style>