<template>
  <div>
    <div class="certificat_page">
      <div class="container">
        <div class="certificat_top">
          <div class="certificat_top_title">
          {{ $t('serSearch') }}
          </div>
          <div class="certificat_top_text">
          {{ $t('serTitle') }}
          </div>
        </div>
        <div class="certificat_bottom">
          <div class="search_seriya">
            <input
              type="text"
              v-model="seriya"
              :placeholder="$t('seriya')"
              @input="search"
            />
          </div>
          <div class="search">
            <input
              type="text"
              :placeholder="$t('serNum')"
              v-model="seriyaRaqam"
              @keyup.enter="search"
            />
            <div class="search_btn" @click="search">{{ $t('search') }}</div>
          </div>

          <div class="certificats" v-if="cerModal">
            <div class="certificat">
              <div class="certificat_content">
                <div class="certificat_content_name">
                  {{ certificat?.name }}
                </div>
                <div class="certificat_content_course_name">
                  {{ $t("certificat1") }} : {{ certificat?.course }}
                </div>
                <div class="certificat_content_data">
                  {{ $t("certificat") }} : {{ certificat?.date }}
                </div>
                <div class="certificat_content_btns">
                  <div
                    class="certificat_content_btns_btn"
                    @click="pdfApi(certificat?.cer_id)"
                  >
                    PDF {{ $t('pdf') }}
                  </div>
                  <div class="certificat_content_btns_btn" @click="copy">copy cilka</div>
                </div>
              </div>
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
const seriyaRaqam = ref("");
const seriya = ref("");
const baseUrl = useRuntimeConfig().public.baseUrl;
const certificat = ref(null);
const cerModal = ref(false);
async function search() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/certificate", {
    method: "POST",
    body: JSON.stringify({
      id: seriyaRaqam.value,
      series: seriya.value,
    }),
  });
  certificat.value = data.data;
  if(data.success){
    cerModal.value = true
  }else{
    cerModal.value = false
  }
  store.loader = false;
}
async function pdfApi(l) {
  window.location.href = baseUrl + "/certificate/" + l;
}
function copy(){
  const el = document.createElement('textarea');
  el.value = baseUrl + "/certificate/" + certificat.value.cer_id;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
}
</script>

<style lang="scss" scoped>
</style>