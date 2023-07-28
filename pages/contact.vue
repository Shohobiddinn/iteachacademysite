<template>
  <div>
    <div class="contact_page">
      <div class="container">
        <div class="contact_page_top">
          <div class="contact_content">
            <div class="contact_content_title">
              <div class="contact_content_title_name">
                {{ $t("footerTitle") }}
              </div>
              <div class="contact_content_title_text">
                {{ $t("footerTitle1") }}
              </div>
              <div class="contact_content_title_item email">
                <img :src="contactInfo?.email_image" alt="logo" />
                {{ contactInfo?.email }}
              </div>
              <div class="contact_content_title_item number">
                <img :src="contactInfo?.phone_image" alt="logo" />
                {{ contactInfo?.phone }}
              </div>
              <div class="contact_content_title_item location">
                <img :src="contactInfo?.location_image" alt="logo" />
                {{ contactInfo?.location }}
              </div>
            </div>
            <div class="contact_content_user">
              <div class="contact_content_user_title">{{ $t('aloqa') }}</div>
              <div class="contact_content_user_inputs">
                <input type="text" ref="name" :placeholder="$t('footerUser')" />
                <span :class="{ active: nameTitle }">{{ $t("input") }}</span>
              </div>
              <div class="contact_content_user_input phone">
                <input type="text" class="defoult_input" ref="phone" />
                <span :class="{ active: numberTitle }">{{ $t("input1") }}</span>
              </div>
              <div
                class="contact_content_user_courses"
                :class="{ active: courseModal }"
              >
                <div
                  class="contact_content_user_courses_option"
                  ref="course"
                  @click="courseModal = !courseModal"
                >
                  {{ courseContent === "" ? $t("certificat1") : courseContent }}
                </div>
                <div class="contact_content_user_courses_content" >
                  <div
                    class="contact_content_user_courses_content_title"
                    v-for="c in courseContentInfo"
                    :key="c?.id"
                    @click="courseCon(c.name), (courseModal = false)"
                  >
                    <img :src="c?.image" :alt="c?.name" />
                    {{ c?.name }}
                  </div>
                </div>
              </div>
              <div class="contact_content_user_send">
                <div class="contact_content_user_send_btn" @click="getInTouch">
                  {{ $t("footerUser4") }}
                </div>
              </div>
              <div class="contact_content_user_text">
                {{ $t("footerUser5") }}
              </div>
              <div class="contact_content_user_icons">
                <div class="contact_content_user_icons_icon">
                  <nuxt-link
                    to="https://www.facebook.com/iteachstudy"
                    class="footer_content_user_icons_icon_link"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="#00D38A"
                        fill-opacity="0.6"
                      />
                    </svg>
                  </nuxt-link>
                </div>
                <div class="contact_content_user_icons_icon">
                  <nuxt-link
                    to="https://www.instagram.com/iteachstudy/"
                    class="footer_content_user_icons_icon_link"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0281 2.00123C13.7578 1.99843 14.4876 2.00576 15.2171 2.02323L15.4111 2.03023C15.6351 2.03823 15.8561 2.04823 16.1231 2.06023C17.1871 2.11023 17.9131 2.27823 18.5501 2.52523C19.2101 2.77923 19.7661 3.12323 20.3221 3.67923C20.8305 4.17884 21.2239 4.78318 21.4751 5.45023C21.7221 6.08723 21.8901 6.81423 21.9401 7.87823C21.9521 8.14423 21.9621 8.36623 21.9701 8.59023L21.9761 8.78423C21.9939 9.51342 22.0015 10.2428 21.9991 10.9722L22.0001 11.7182V13.0282C22.0026 13.758 21.9949 14.4877 21.9771 15.2172L21.9711 15.4112C21.9631 15.6352 21.9531 15.8562 21.9411 16.1232C21.8911 17.1872 21.7211 17.9132 21.4751 18.5502C21.2247 19.218 20.8312 19.8228 20.3221 20.3222C19.8221 20.8306 19.2174 21.224 18.5501 21.4752C17.9131 21.7222 17.1871 21.8902 16.1231 21.9402C15.8561 21.9522 15.6351 21.9622 15.4111 21.9702L15.2171 21.9762C14.4876 21.994 13.7578 22.0017 13.0281 21.9992L12.2821 22.0002H10.9731C10.2434 22.0027 9.51361 21.995 8.78409 21.9772L8.59009 21.9712C8.3527 21.9626 8.11536 21.9526 7.87809 21.9412C6.81409 21.8912 6.08809 21.7212 5.45009 21.4752C4.78277 21.2246 4.17833 20.8311 3.67909 20.3222C3.17013 19.8225 2.77631 19.2178 2.52509 18.5502C2.27809 17.9132 2.11009 17.1872 2.06009 16.1232C2.04895 15.8859 2.03895 15.6486 2.03009 15.4112L2.02509 15.2172C2.00665 14.4877 1.99832 13.758 2.00009 13.0282V10.9722C1.9973 10.2428 2.00463 9.51343 2.02209 8.78423L2.02909 8.59023C2.03709 8.36623 2.04709 8.14423 2.05909 7.87823C2.10909 6.81323 2.27709 6.08823 2.52409 5.45023C2.77546 4.78285 3.17005 4.17868 3.68009 3.68023C4.17898 3.17098 4.78305 2.7768 5.45009 2.52523C6.08809 2.27823 6.81309 2.11023 7.87809 2.06023L8.59009 2.03023L8.78409 2.02523C9.51327 2.0068 10.2427 1.99847 10.9721 2.00023L13.0281 2.00123ZM12.0001 7.00123C11.3376 6.99186 10.6798 7.11425 10.0651 7.3613C9.45029 7.60834 8.89074 7.97511 8.41893 8.44029C7.94713 8.90546 7.57249 9.45977 7.31678 10.071C7.06106 10.6822 6.92938 11.3382 6.92938 12.0007C6.92938 12.6633 7.06106 13.3192 7.31678 13.9305C7.57249 14.5417 7.94713 15.096 8.41893 15.5612C8.89074 16.0264 9.45029 16.3931 10.0651 16.6402C10.6798 16.8872 11.3376 17.0096 12.0001 17.0002C13.3262 17.0002 14.5979 16.4734 15.5356 15.5358C16.4733 14.5981 17.0001 13.3263 17.0001 12.0002C17.0001 10.6741 16.4733 9.40238 15.5356 8.4647C14.5979 7.52701 13.3262 7.00123 12.0001 7.00123ZM12.0001 9.00123C12.3986 8.99389 12.7946 9.06603 13.1649 9.21344C13.5352 9.36085 13.8724 9.58057 14.1569 9.85978C14.4413 10.139 14.6673 10.4721 14.8215 10.8396C14.9758 11.2071 15.0553 11.6016 15.0554 12.0002C15.0554 12.3988 14.9761 12.7934 14.8219 13.1609C14.6678 13.5285 14.4419 13.8617 14.1576 14.141C13.8732 14.4203 13.5361 14.6401 13.1658 14.7876C12.7955 14.9352 12.3996 15.0074 12.0011 15.0002C11.2054 15.0002 10.4424 14.6842 9.87977 14.1216C9.31716 13.5589 9.00109 12.7959 9.00109 12.0002C9.00109 11.2046 9.31716 10.4415 9.87977 9.87891C10.4424 9.3163 11.2054 9.00023 12.0011 9.00023L12.0001 9.00123ZM17.2501 5.50123C16.9275 5.51414 16.6224 5.65138 16.3987 5.8842C16.175 6.11702 16.0501 6.42736 16.0501 6.75023C16.0501 7.0731 16.175 7.38344 16.3987 7.61626C16.6224 7.84908 16.9275 7.98632 17.2501 7.99923C17.5816 7.99923 17.8996 7.86753 18.134 7.63311C18.3684 7.39869 18.5001 7.08075 18.5001 6.74923C18.5001 6.41771 18.3684 6.09977 18.134 5.86535C17.8996 5.63093 17.5816 5.49923 17.2501 5.49923V5.50123Z"
                        fill="#00D38A"
                        fill-opacity="0.6"
                      />
                    </svg>
                  </nuxt-link>
                </div>
                <div class="contact_content_user_icons_icon">
                  <nuxt-link
                    to="https://t.me/iteachstudy"
                    class="footer_content_user_icons_icon_link"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                        fill="#00D38A"
                        fill-opacity="0.6"
                      />
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="contact_iframe" v-html="contactInfo?.map"></div>
        </div>
        <div class="contact_menu">
          <div class="contact_menu_logo">
            <NuxtLink :to="localePath('/')">

              <img :src="contactInfo?.header_logo" alt="" />
            </NuxtLink>
          </div>
          <div class="contact_menu_content">
            <ul class="contact_menu_content_title">
              <li class="contact_menu_content_title_item">
                <NuxtLink
                  :to="localePath('/')"
                  class="contact_menu_content_title_item_link"
                  >Home
                </NuxtLink>
              </li>
              <li class="contact_menu_content_title_item">
                <NuxtLink
                  :to="localePath('/courses')"
                  class="contact_menu_content_title_item_link"
                  >Courses</NuxtLink
                >
              </li>
              <li class="contact_menu_content_title_item">
                <NuxtLink
                  :to="localePath('/about')"
                  class="contact_menu_content_title_item_link"
                  >About Us</NuxtLink
                >
              </li>
              <li class="contact_menu_content_title_item">
                <NuxtLink
                  :to="localePath('/certificat')"
                  class="contact_menu_content_title_item_link"
                  >Certificates</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~~/store/store';
const store = useStore();
import IMask from "imask";
definePageMeta({
  layout: "view",
});
const { locale} = useI18n();
const localePath = useLocalePath();
const baseUrl = useRuntimeConfig().public.baseUrl;
const contactInfo = ref(null);
async function contactApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/setting", {
    headers: {
      lang: locale.value,
    },
  });
  contactInfo.value = data.data;
  store.loader = false
}
contactApi();
const courseModal = ref(false);
const phone = ref("");
const name = ref("")
const courseContentInfo = ref(null);
async function courseApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/courses", {
    headers: {
      lang: locale.value,
    },
  });
  courseContentInfo.value = data.data;
  store.loader = false;
}
courseApi();
const courseContent = ref("");
function courseCon(c) {
  courseContent.value = c;
}
const nameTitle = ref(false);
const numberTitle = ref(false);
const course = ref("")
async function getInTouch() {
  store.loader = true;
  const tel = Number(phone.value.value.replace(/\D/g, "").length);
  if (
    tel == 12 &&
    name.value.value !== ""
  ) {

    const data = await $fetch(baseUrl + "/contact", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YWxpIiwiaWF0IjoxNjg5NDExODQ4LCJleHAiOjE2ODk0OTgyNDh9.ivy2fDd7HsBHGr8nET74qg6IhFjMzHn62iz5Yyx1ASw",
    },
    body: JSON.stringify({
      name: name.value.value,
      phone: "+" + phone.value.value.replace(/\D/g, ""),
      course: course.value.textContent,
    }),
  });
  console.log("hello");
    name.value.style.borderColor = "#00D38A";
    phone.value.style.borderColor = "#00D38A";
    name.value.value = null;
    phone.value.value = null;
    numberTitle.value = false;
    nameTitle.value = false;
  } else {
    console.log("bug");
    name.value.style.borderColor = "red";
    phone.value.style.borderColor = "red";
    if (tel == 12) {
      phone.value.style.borderColor = "#00D38A";
      numberTitle.value = false;
    } else {
      phone.value.style.borderColor = "red";
      numberTitle.value = true;
    }
    if (name.value.value !== "") {
      name.value.style.borderColor = "#00D38A";
      nameTitle.value = false;
    } else {
      name.value.style.borderColor = "red";
      nameTitle.value = true;
    }
  };
  store.loader = false;
}
onMounted(() => {
  var maskOptions = {
    mask: "+{998}(00) 000-00-00",
    lazy: false,
  };
  var mask = new IMask(phone.value, maskOptions);
});
</script>

<style lang="scss" scoped>
</style>