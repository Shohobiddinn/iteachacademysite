<template>
  <div>
    <div
      class="bg_modal"
      v-if="bgModal"
      @click="(navModal = false), (langModal = false), (bgModal = false)"
    ></div>
    <nav>
      <div class="container">
        <div class="logo">
          <NuxtLink :to="localePath('/')">
            <img :src="contactInfo?.header_logo" alt="logo" />
          </NuxtLink>
        </div>
        <ul class="menu">
          <li class="menu_li">
            <nuxt-link class="menu_li_link" :to="localePath('/')">{{
              $t("menu")
            }}</nuxt-link>
          </li>
          <li class="menu_li">
            <nuxt-link class="menu_li_link" :to="localePath('/courses')">{{
              $t("menu1")
            }}</nuxt-link>
          </li>
          <li class="menu_li">
            <nuxt-link class="menu_li_link" :to="localePath('/about')">{{
              $t("menu2")
            }}</nuxt-link>
          </li>
          <li class="menu_li">
            <nuxt-link class="menu_li_link" :to="localePath('/certificat')">{{
              $t("menu3")
            }}</nuxt-link>
          </li>
          <li class="menu_li">
            <nuxt-link class="menu_li_link" :to="localePath('/blog')">{{
              $t("menu4")
            }}</nuxt-link>
          </li>
        </ul>
        <div class="langunge" :class="{ active: langModal }">
          <div
            class="lang-option"
            @click="(langModal = !langModal), (bgModal = true)"
          >
            {{ locale }}
          </div>
          <div class="lang-title">
            <NuxtLink
              v-for="locale in locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="lang-content"
              ref="language"
              @click="(langModal = false), delLang($event), (bgModal = false)"
            >
              {{ locale.code }}
            </NuxtLink>
          </div>
        </div>
        <div class="set">
          <nuxt-link :to="localePath('/contact')" class="seti">{{
            $t("kirish")
          }}</nuxt-link>
        </div>
        <div class="nav_btn" @click="navModal = true">
          <span></span><span></span><span></span>
        </div>
        <div class="nav_modal" :class="{ active: navModal }">
          <div class="nav_modal_language">
            <div class="lang_title">
              <NuxtLink
                v-for="locale in locales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="lang_title_content"
                @click="langModal = false"
              >
                {{ locale.code }}
              </NuxtLink>
            </div>
            <div class="close_btn" @click="navModal = false"></div>
          </div>
          <ul class="nav_modal_menu">
            <li class="nav_modal_menu_item">
              <nuxt-link to="/" class="nav_modal_menu_item">{{
                $t("menu")
              }}</nuxt-link>
            </li>
            <li class="nav_modal_menu_item">
              <nuxt-link to="/courses" class="nav_modal_menu_item">{{
                $t("menu1")
              }}</nuxt-link>
            </li>
            <li class="nav_modal_menu_item">
              <nuxt-link to="/about" class="nav_modal_menu_item">{{
                $t("menu2")
              }}</nuxt-link>
            </li>
            <li class="nav_modal_menu_item">
              <nuxt-link to="/certificat" class="nav_modal_menu_item">{{
                $t("menu3")
              }}</nuxt-link>
            </li>
            <li class="nav_modal_menu_item">
              <nuxt-link to="/blog" class="nav_modal_menu_item">{{
                $t("menu4")
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
const langModal = ref(false);
const switchLocalePath = useSwitchLocalePath();
const load = ref(false);
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const navModal = ref(false);
const baseUrl = useRuntimeConfig().public.baseUrl;
const contactInfo = ref(null);
async function contactApi() {
  load.value = true
  const data = await $fetch(baseUrl + "/setting", {
    headers: {
      lang: locale.value,
    },
  });
  contactInfo.value = data.data;
  load.value = false;
}
contactApi();
const language = ref();
function delLang(e) {
  document.querySelectorAll(".lang-content").forEach((item) => {
    if (e.target === item) {
      e.target.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
onMounted(() => {

  document.querySelectorAll(".lang-content").forEach((item) => {
    if (locale.value === item.textContent) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});
</script>

<style lang="scss" scoped>
</style>