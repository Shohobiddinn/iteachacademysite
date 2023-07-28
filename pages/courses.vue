<template>
  <div>
    <div class="courses_page">
      <div class="container">
        <div class="courses_page_top">
          <div class="courses_page_top_title">
            {{ $t("homeTitle1") }}
          </div>
          <div class="courses_page_top_text">
            {{ $t("teacherTitle") }}
          </div>
        </div>
        <div class="courses_page_bottom">
          <div class="course" v-for="c in courses" :key="c">
            <NuxtLink :to="localePath(`/course/${c?.slug}`)">
              <div class="course_title">
                <div class="course_title_image">
                  <img :src="c?.image" :alt="c?.name" />
                </div>
                <div class="course_title_content">{{ c?.name }}</div>
              </div>
              <div class="course_text" v-html="c?.description"></div>
              <div class="course_content teacher">
                {{ $t("courseTeacher") }} : <span>{{ c?.teacher?.name }}</span>
              </div>
              <div class="course_content duration">
                {{ $t("courseDuration") }} :
                <span>{{ c?.duration }} {{ $t("oy") }}</span>
              </div>
            </NuxtLink>
            <div class="course_learn">
              <NuxtLink :to="localePath('/contact')" class="course_learn_btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="white"
                  />
                </svg>
                {{ $t("coursesTitle") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~~/store/store";
const store = useStore();
const { locale } = useI18n();
const localePath = useLocalePath();
const baseUrl = useRuntimeConfig().public.baseUrl;
const load = ref(false);
const courses = ref(null);
async function courseApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/courses", {
    headers: {
      lang: locale.value,
    },
  });
  courses.value = data.data;
  store.loader = false;
}
courseApi();
</script>

<style>
</style>