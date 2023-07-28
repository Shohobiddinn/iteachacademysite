<template>
  <div>
    <div class="teacher_page">
      <div class="container">
  
        <div class="teacher_page_top">
          <div class="teacher_page_top_image">
            <img :src="teacher?.image" :alt="teacher?.name" />
          </div>
          <div class="teacher_page_top_content">
            <div class="teacher_page_top_content_name">{{ teacher?.name }}</div>
            <div class="teacher_page_top_content_title">
            {{ teacher?.course?.name }}
            </div>
          </div>
        </div>
        <div class="teacher_page_bottom">
          <div class="teacher_page_bottom_content">
            <div
              class="teacher_page_bottom_content_title"
              v-html="teacher?.description"
            >
         
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { useStore } from '~~/store/store';
const store = useStore();
const baseUrl = useRuntimeConfig().public.baseUrl;
const { locale } = useI18n();
const route = useRoute();
const { slug } = route.params;
const teacher = ref(null);
async function teacherApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/teacher/" + slug,{
    headers:{
      lang:locale.value
    }
  });
  teacher.value = data.data;
  store.loader = false;
}
teacherApi()
</script>
  
  <style lang="scss" scoped>
</style>