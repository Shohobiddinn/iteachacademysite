<template>
  <div>
    <div class="blog_page">
      <div class="container">
        <div class="blog_page_top">
          <div class="blog_page_top_title">{{ $t("blogs") }}</div>
          <div class="blog_page_top_text">
            {{ $t("teacherTitle") }}
          </div>
        </div>

        <div class="blog_page_news">
          <div class="blog_page_news_content">
            <div
              class="blog_page_news_content_item"
              v-for="(b, i) in blogs?.data?.news"
              :key="i"
            >
              <NuxtLink :to="localePath(`/blogone/${b.slug}`)">
                <img :src="b?.images?.image" :alt="b?.title" />

                <div class="content">
                  <div class="content_title">
                    {{ b?.title }}
                  </div>
                  <div class="content_text" v-html="b?.description"></div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="blog_page_bottom">
          <div class="content" v-for="b in blogs?.data?.blogs" :key="b.id">
            <NuxtLink :to="localePath(`/blogone/${b.slug}`)">
              <div class="content_image">
                <img :src="b?.images?.image" alt="" />
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
import { useStore } from '~~/store/store';
const store = useStore();
const localePath = useLocalePath();
const { locale } = useI18n();
const baseUrl = useRuntimeConfig().public.baseUrl;
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