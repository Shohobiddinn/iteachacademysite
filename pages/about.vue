<template>
  <div>
    <div class="about_page_top">
      
      <div class="container">
        <div class="about_top_title">
     
          {{ titleTextName }}
         <span> {{ titleText }}</span>
        </div>
        <div class="about_top_text">
          {{ about?.description }}
        </div>
      </div>
    </div>
    <div class="about_page_image">
      <img :src="about?.image" alt="" />
    </div>
    <div class="about_page_information">
      <div class="container">
        <div class="content">
          <div class="content_title">{{ habout?.title }}</div>
          <div class="content_text" v-html="habout?.description">

          </div>
        </div>
      </div>
    </div>
    <div class="about_page_bottom">
      <div class="container">
        <div class="about_bottom_title">{{ $t("aboutTitle3") }}</div>
        <div class="about_bottom_contents">
          <div class="peoples" v-for="t in teachers" :key="t?.id">
            <NuxtLink :to="localePath(`/teacher/${t?.slug}`)" class="people">
              <div class="people_image">
                <img :src="t?.image" :alt="t?.name" />
              </div>
              <div class="people_name">{{ t?.name }}</div>
              <div class="people_title">{{ t?.course.name }}</div>
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
const { locale } = useI18n();
const localePath = useLocalePath();
const baseUrl = useRuntimeConfig().public.baseUrl;
const about = ref(null);
async function aboutApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/about", {
    headers: {
      lang: locale.value,
    },
  });
  about.value = await data.data;
  store.loader = false;
}

const teachers = ref(null);
async function teachersApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/teachers", {
    headers: {
      lang: locale.value,
    },
  });
  teachers.value = data.data.slice(0, 4);
  store.loader = false;
}
const habout = ref(null);
async function haboutApi(){
  store.loader = true;
  const data = await $fetch(baseUrl + "/habout",{
    headers: {
      lang: locale.value,
    },
  });
  habout.value = data.data;
  store.loader = false;
}
haboutApi()

let text = ref('');
onMounted(async () => {
  await aboutApi();
  await teachersApi();

  text.value = about.value?.title;
});
const titleText = computed(() => {
  const arr = text.value.split(" ");
  return arr.slice(arr.length - 3).join(" ");
});
const titleTextName = computed(()=>{
  const arr = text.value.split(" ");
  return arr.slice(0,arr.length - 3).join(" ")
})
</script>

<style lang="scss" scoped>
</style>