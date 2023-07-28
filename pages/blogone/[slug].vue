<template>
  <div>
    <div class="blogone_page">
      <div class="container">
        <div class="blogone_top">
          <div class="blogone_top_title">
            {{ $t("blogone") }}
          </div>
          <div class="blogone_top_text">
            {{ $t("teacherTitle") }}
          </div>
        </div>
        <div class="blogone_bottom">
          <div class="blogone_bottom_image">
            <img :src="blog?.data?.images?.image" alt="blog.title" />
          </div>
          <div
            class="blogone_bottom_text"
            v-html="blog?.data?.description"
          ></div>
        </div>
        <div class="blogone_page_bottom">
          <div class="content" v-for="b in blogs?.data?.blogs" :key="b?.id">
            <NuxtLink :to="localePath(`/blogone/${b?.slug}`)">
              <div class="content_image">
                <img :src="b?.images?.image" :alt="b?.title" />
              </div>
              <div class="content_title">
                {{ b?.title }}
              </div>
              <div class="content_text" v-html="b?.description"></div>
            </NuxtLink>
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
const localePath = useLocalePath();
const { slug } = route.params;
const { locale } = useI18n();
const blog = ref(null);
async function blogApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/blog/" + slug);
  blog.value = data;
  store.loader = false;
}
blogApi();
const blogs = ref(null);
async function blogsApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/blogs", {
    headers: {
      lang: locale.value,
    },
  });
  blogs.value = data;
  store.loader = false;
}
blogsApi();
</script>
  
  <style lang="scss" scoped>
</style>