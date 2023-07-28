<template>
  <div>
    <div class="banner">
      <div class="bg_image">
        <div class="bg_image_earth">
          <img src="../assets/images/earth.png" alt="" />
        </div>
        <div class="bg_image_saturn">
          <img src="../assets/images/saturn.png" alt="" />
        </div>
        <div class="bg_image_moon">
          <img
            ref="moon"
            class="moon_rotate"
            src="../assets/images/moonimage.png"
            alt=""
          />
        </div>
      </div>
      <div class="container">
        <div class="banner-top">
          <div class="text">
            <h1>
              {{ bannerContent?.title }}
            </h1>
            <p v-html="`${bannerContent?.description}`"></p>
            <div class="course">
              <nuxt-link to="#courses">
                <div class="courses-option">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 11.5L11.2929 14.7929C11.6834 15.1834 12.3166 15.1834 12.7071 14.7929L16 11.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <rect
                      x="0.75"
                      y="1.25"
                      width="22.5"
                      height="22.5"
                      rx="11.25"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                  {{ $t("homeTitle2") }}
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-bottom">
      <div class="container">
        <h3>Trusted by</h3>
        <div class="icons">
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70823 12.1627C3.98531 11.8502 4.16656 10.9585 4.16656 10.5085C4.16656 10.0585 5.0499 8.3335 13.2082 8.3335C22.9874 8.3335 43.7499 15.9272 43.7499 29.2543C43.7499 42.5814 25.6041 39.5272 22.0103 38.671C18.4186 37.8127 10.4166 33.971 10.4166 29.9752C10.4166 27.0689 16.8332 25.0002 24.4061 25.0002C31.977 25.0002 35.4166 27.1689 35.4166 29.1668C35.4166 30.2085 35.2624 31.7272 33.3332 32.2918"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.8747 16.667C20.7586 25.6944 20.7586 34.7229 20.8747 43.7503"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 34.375H10.4167V35.4167H6.25V34.375ZM16.6667 34.375H21.875V35.4167H16.6667V34.375ZM33.3333 35.4167H28.125V34.375H33.3333V35.4167ZM44.7917 35.4167H39.5833V34.375H44.7917V35.4167ZM44.7917 27.0833H39.5833V28.125H44.7917V27.0833ZM44.7917 19.7917H39.5833V20.8333H44.7917V19.7917ZM44.7917 12.5H39.5833V13.5417H44.7917V12.5ZM33.3333 27.0833H28.125V28.125H33.3333V27.0833ZM16.6667 28.125H21.875V27.0833H16.6667V28.125ZM16.6667 19.7917H21.875V20.8333H16.6667V19.7917Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0002 38.5417C21.8627 34.4479 18.7502 30.2083 18.7502 27.0833C18.7502 22.9167 20.8335 20.8333 25.0002 20.8333C29.1668 20.8333 31.2502 22.9167 31.2502 27.0833C31.2502 30.2083 28.1377 34.4479 25.0002 38.5417ZM25.0002 38.5417C27.0835 40.625 28.1252 41.6667 30.2085 42.7083C32.2918 43.75 35.4168 44.7917 39.5835 41.6667C43.7502 38.5417 42.7085 34.375 40.6252 29.1667C38.5418 23.9583 35.7647 17.7083 30.2085 9.375C28.471 7.29167 27.0835 6.25 24.9939 6.25C22.9106 6.25 21.6127 7.1875 19.7918 9.375C14.2356 17.7083 11.4585 23.9583 9.37516 29.1667C7.29183 34.375 6.25016 38.5417 10.4168 41.6667C14.5835 44.7917 17.7085 43.75 19.7918 42.7083C21.8752 41.6667 22.9168 40.625 25.0002 38.5417Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.8062 32.9751C45.5771 24.3793 39.9229 13.1397 30.2083 6.25014C29.9271 6.05014 35.1875 20.2168 32.9333 25.2585C28.4479 22.2293 23.025 17.9793 16.6666 12.5001L15.625 16.6668L8.3333 14.5835C17.4166 24.4751 23.3604 30.6147 26.1666 33.0022C16.4625 37.3543 3.97914 30.9647 4.16664 31.2501C6.2833 34.4689 16.6666 43.7501 27.0833 43.7501C31.25 43.7501 34.975 42.7043 36.9625 40.8564C36.9729 40.846 37.8625 39.9272 39.8333 40.5022C40.8833 40.8106 42.8812 41.8918 45.8333 43.7501V40.6106C45.8333 37.7418 44.7604 35.0481 42.8062 32.9751Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_13_972)">
                  <path
                    d="M33.506 4.1665H24.9998C24.4472 4.1665 23.9173 4.386 23.5266 4.7767C23.1359 5.1674 22.9164 5.6973 22.9164 6.24984V30.2082C22.9167 30.7272 22.7877 31.2382 22.541 31.6949C22.2943 32.1516 21.9377 32.5397 21.5035 32.824C21.0692 33.1084 20.571 33.2801 20.0537 33.3237C19.5365 33.3673 19.0165 33.2813 18.5408 33.0736C18.0652 32.8658 17.6487 32.5429 17.3291 32.1339C17.0095 31.7249 16.7968 31.2427 16.7102 30.7309C16.6236 30.2191 16.6659 29.6938 16.8332 29.2024C17.0005 28.7111 17.2876 28.2691 17.6685 27.9165L17.9185 27.7082C18.1769 27.5139 18.3865 27.2622 18.5308 26.9729C18.675 26.6836 18.75 26.3648 18.7498 26.0415V17.029C18.75 16.7145 18.6791 16.4041 18.5423 16.1209C18.4055 15.8378 18.2063 15.5893 17.9598 15.394C17.7132 15.1988 17.4257 15.0619 17.1187 14.9937C16.8118 14.9254 16.4933 14.9275 16.1873 14.9998C12.4562 15.8792 9.17853 18.0994 6.97787 21.2381C4.77722 24.3767 3.80714 28.2149 4.25219 32.0223C4.69724 35.8296 6.52637 39.3406 9.39158 41.8871C12.2568 44.4336 15.9581 45.8381 19.7914 45.8332L20.2977 45.8228C24.3515 45.6913 28.1954 43.9887 31.0168 41.0748C33.8381 38.1609 35.4159 34.2641 35.4164 30.2082V24.5832L36.0644 24.9019C38.4019 26.0061 40.9248 26.7103 43.5435 26.9707C43.8332 26.9995 44.1258 26.9673 44.4023 26.8761C44.6788 26.7849 44.9331 26.6368 45.1488 26.4413C45.3645 26.2458 45.5369 26.0072 45.6547 25.741C45.7726 25.4748 45.8334 25.1868 45.8331 24.8957V16.4936C45.833 16.0011 45.6585 15.5245 45.3404 15.1484C45.0223 14.7724 44.5813 14.5212 44.0956 14.4394C41.9637 14.0777 39.997 13.0621 38.4678 11.5332C36.9385 10.0044 35.9224 8.03791 35.5602 5.90609C35.4789 5.42001 35.2279 4.9785 34.8518 4.66C34.4757 4.3415 33.9989 4.16665 33.506 4.1665Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_972">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0002 25.0002V12.5002M25.0002 25.0002H37.5002M25.0002 25.0002V37.5002M25.0002 25.0002H12.5002M25.0002 12.5002C25.0002 11.3951 25.4392 10.3353 26.2206 9.55389C27.002 8.77248 28.0618 8.3335 29.1668 8.3335C30.2719 8.3335 31.3317 8.77248 32.1131 9.55389C32.8945 10.3353 33.3335 11.3951 33.3335 12.5002V25.0002M25.0002 12.5002C25.0002 11.6761 24.7558 10.8705 24.298 10.1853C23.8401 9.50008 23.1894 8.96603 22.428 8.65067C21.6667 8.3353 20.8289 8.25279 20.0206 8.41356C19.2124 8.57433 18.4699 8.97117 17.8872 9.55389C17.3045 10.1366 16.9077 10.879 16.7469 11.6873C16.5861 12.4955 16.6686 13.3333 16.984 14.0947C17.2994 14.856 17.8334 15.5068 18.5186 15.9646C19.2038 16.4225 20.0094 16.6668 20.8335 16.6668M33.3335 20.8335C33.3335 20.0094 33.5779 19.2038 34.0357 18.5186C34.4935 17.8334 35.1443 17.2994 35.9056 16.984C36.667 16.6686 37.5048 16.5861 38.313 16.7469C39.1213 16.9077 39.8637 17.3045 40.4464 17.8872C41.0292 18.4699 41.426 19.2124 41.5868 20.0206C41.7475 20.8289 41.665 21.6667 41.3497 22.428C41.0343 23.1894 40.5002 23.8401 39.815 24.298C39.1298 24.7558 38.3243 25.0002 37.5002 25.0002M37.5002 25.0002C38.6052 25.0002 39.665 25.4392 40.4464 26.2206C41.2278 27.002 41.6668 28.0618 41.6668 29.1668C41.6668 30.2719 41.2278 31.3317 40.4464 32.1131C39.665 32.8945 38.6052 33.3335 37.5002 33.3335H25.0002M29.1668 33.3335C29.9909 33.3335 30.7965 33.5779 31.4817 34.0357C32.1669 34.4935 32.701 35.1443 33.0163 35.9056C33.3317 36.667 33.4142 37.5048 33.2534 38.313C33.0927 39.1213 32.6958 39.8637 32.1131 40.4464C31.5304 41.0292 30.788 41.426 29.9797 41.5868C29.1715 41.7475 28.3337 41.665 27.5723 41.3497C26.811 41.0343 26.1602 40.5002 25.7024 39.815C25.2445 39.1298 25.0002 38.3243 25.0002 37.5002M25.0002 37.5002C25.0002 38.6052 24.5612 39.665 23.7798 40.4464C22.9984 41.2278 21.9386 41.6668 20.8335 41.6668C19.7284 41.6668 18.6686 41.2278 17.8872 40.4464C17.1058 39.665 16.6668 38.6052 16.6668 37.5002V25.0002M16.6668 29.1668C16.6668 29.9909 16.4225 30.7965 15.9646 31.4817C15.5068 32.1669 14.856 32.701 14.0947 33.0163C13.3333 33.3317 12.4955 33.4142 11.6873 33.2534C10.879 33.0927 10.1366 32.6958 9.55389 32.1131C8.97117 31.5304 8.57433 30.788 8.41356 29.9797C8.25279 29.1715 8.3353 28.3337 8.65067 27.5723C8.96603 26.811 9.50008 26.1602 10.1853 25.7024C10.8705 25.2445 11.6761 25.0002 12.5002 25.0002M12.5002 25.0002C11.3951 25.0002 10.3353 24.5612 9.55389 23.7798C8.77248 22.9984 8.3335 21.9386 8.3335 20.8335C8.3335 19.7284 8.77248 18.6686 9.55389 17.8872C10.3353 17.1058 11.3951 16.6668 12.5002 16.6668H25.0002"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8333 26.125C42.075 25.4062 40.2062 23.875 38.4937 20C37.4792 21.45 36.1979 23.2667 36.5771 25C36.6354 25.4958 35.9104 27.0833 35.4167 27.0833H6.25C6.25 37.9333 12.8417 41.6667 19.1583 41.6667C27.75 41.7125 35.4667 38.8 39.6875 31.25C42.075 31.0396 44.4708 28.1146 45.8333 26.125Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6667 20.8335H10.4167V27.0835H16.6667M16.6667 20.8335V27.0835M16.6667 20.8335H22.9167M16.6667 20.8335V14.5835H22.9167M16.6667 27.0835H22.9167M22.9167 20.8335V27.0835M22.9167 20.8335H29.1667M22.9167 20.8335V14.5835M22.9167 27.0835H29.1667V20.8335M29.1667 20.8335V14.5835M22.9167 14.5835H29.1667M22.9167 14.5835V8.3335H29.1667V14.5835M9.52295 37.5002C12.6479 37.5002 13.7875 37.346 15.6854 35.8752M20.8334 33.3335V33.3543"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="icon">
            <nuxt-link to="/"
              ><svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 12.5H16.6667M14.5833 37.5H29.1667M9.375 12.5L20.8333 27.0833M20.8333 27.0833V37.5M20.8333 27.0833L33.3333 16.6667M26.0417 16.6667H36.4583M41.6667 22.9167V31.25M41.6667 37.5V37.5208"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="courses">
      <div class="container">
        <div class="courses-top" id="courses">
          <h1>{{ $t("homeTitle1") }}</h1>
          <p>
            {{ $t("teacherTitle") }}
          </p>
        </div>
        <div class="courses-bottom">
          <Swiper
            class="course-swiper"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
            :slides-per-view="3"
            :breakpoints="{
              '200': {
                slidesPerView: 1,
              },
              '600': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '800': {
                slidesPerView: 2,
              },
              '1020': {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              '1370': {
                spaceBetween: 110,
                slidesPerView: 3,
              },
            }"
            :navigation="{
              prevEl: '.courses_prev',
              nextEl: '.courses_next',
            }"
            :space-between="110"
          >
            <SwiperSlide class="course-slider" v-for="c in course" :key="c.id">
              <div class="course-option">
                <div class="logo">
                  <img :src="c?.image" :alt="c?.name" />
                </div>
                <div class="course-name">{{ c?.name }}</div>
                <div class="course-title" v-html="`${c?.description}`"></div>
                <div class="learn-btn">
                  <NuxtLink :to="localePath(`/course/${c.slug}`)" class="btn">
                    {{ $t("batafsil") }}
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 15.0002V9.00016H12.5V4.16016L20.34 12.0002L12.5 19.8402V15.0002H4.5Z"
                        fill="white"
                      />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </SwiperSlide>
            <div class="pagination">
              <div class="courses_prev icon">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_27_51)">
                    <path
                      d="M42.5 22.5C42.5 26.4556 41.327 30.3224 39.1294 33.6114C36.9318 36.9004 33.8082 39.4638 30.1537 40.9776C26.4991 42.4913 22.4778 42.8874 18.5982 42.1157C14.7186 41.344 11.1549 39.4392 8.35787 36.6421C5.56082 33.8451 3.656 30.2814 2.8843 26.4018C2.11259 22.5222 2.50866 18.5008 4.02241 14.8463C5.53616 11.1918 8.09962 8.06823 11.3886 5.8706C14.6776 3.67297 18.5444 2.5 22.5 2.5C27.8043 2.5 32.8914 4.60713 36.6421 8.35786C40.3929 12.1086 42.5 17.1957 42.5 22.5ZM23.0375 12.5C22.7107 12.834 22.5278 13.2827 22.5278 13.75C22.5278 14.2173 22.7107 14.666 23.0375 15L28.75 20.75L11.075 20.75C10.6109 20.75 10.1658 20.9344 9.83757 21.2626C9.50938 21.5907 9.325 22.0359 9.325 22.5C9.325 22.9641 9.50938 23.4092 9.83757 23.7374C10.1658 24.0656 10.6109 24.25 11.075 24.25L28.575 24.25L23.0375 29.7875C22.706 30.119 22.5197 30.5686 22.5197 31.0375C22.5197 31.5063 22.706 31.956 23.0375 32.2875C23.369 32.619 23.8187 32.8053 24.2875 32.8053C24.7563 32.8053 25.206 32.619 25.5375 32.2875L35.375 22.4L25.5125 12.5C25.35 12.3375 25.1571 12.2086 24.9447 12.1206C24.7324 12.0326 24.5048 11.9874 24.275 11.9874C24.0452 11.9874 23.8176 12.0326 23.6053 12.1206C23.3929 12.2086 23.2 12.3375 23.0375 12.5Z"
                      fill="#00D38A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_27_51">
                      <rect
                        width="45"
                        height="45"
                        fill="white"
                        transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 45 45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="courses_next icon">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_27_51)">
                    <path
                      d="M42.5 22.5C42.5 26.4556 41.327 30.3224 39.1294 33.6114C36.9318 36.9004 33.8082 39.4638 30.1537 40.9776C26.4991 42.4913 22.4778 42.8874 18.5982 42.1157C14.7186 41.344 11.1549 39.4392 8.35787 36.6421C5.56082 33.8451 3.656 30.2814 2.8843 26.4018C2.11259 22.5222 2.50866 18.5008 4.02241 14.8463C5.53616 11.1918 8.09962 8.06823 11.3886 5.8706C14.6776 3.67297 18.5444 2.5 22.5 2.5C27.8043 2.5 32.8914 4.60713 36.6421 8.35786C40.3929 12.1086 42.5 17.1957 42.5 22.5ZM23.0375 12.5C22.7107 12.834 22.5278 13.2827 22.5278 13.75C22.5278 14.2173 22.7107 14.666 23.0375 15L28.75 20.75L11.075 20.75C10.6109 20.75 10.1658 20.9344 9.83757 21.2626C9.50938 21.5907 9.325 22.0359 9.325 22.5C9.325 22.9641 9.50938 23.4092 9.83757 23.7374C10.1658 24.0656 10.6109 24.25 11.075 24.25L28.575 24.25L23.0375 29.7875C22.706 30.119 22.5197 30.5686 22.5197 31.0375C22.5197 31.5063 22.706 31.956 23.0375 32.2875C23.369 32.619 23.8187 32.8053 24.2875 32.8053C24.7563 32.8053 25.206 32.619 25.5375 32.2875L35.375 22.4L25.5125 12.5C25.35 12.3375 25.1571 12.2086 24.9447 12.1206C24.7324 12.0326 24.5048 11.9874 24.275 11.9874C24.0452 11.9874 23.8176 12.0326 23.6053 12.1206C23.3929 12.2086 23.2 12.3375 23.0375 12.5Z"
                      fill="#00D38A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_27_51">
                      <rect
                        width="45"
                        height="45"
                        fill="white"
                        transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 45 45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="teachers">
      <div class="container">
        <div class="teacher-top">
          <h1>{{ $t("teacher") }}</h1>
          <p>
            {{ $t("teacherTitle") }}
          </p>
        </div>
        <div class="teacher-bottom">
          <Swiper
            class="teacher-swiper"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
            :slides-per-view="4"
            :space-between="78"
            :breakpoints="{
              '200': {
                slidesPerView: 1,
              },
              '600': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              '800': {
                slidesPerView: 3,
              },
              '1020': {
                spaceBetween: 30,
                slidesPerView: 4,
              },
              '1370': {
                spaceBetween: 110,
                slidesPerView: 4,
              },
            }"
            :navigation="{
              prevEl: '.teacher_prev',
              nextEl: '.teacher_next',
            }"
          >
            <SwiperSlide
              class="teacher-slider"
              v-for="t in teachers"
              :key="t.id"
            >
              <div class="teacher">
                <nuxt-link :to="localePath(`/teacher/${t?.slug}`)">
                  <div class="teacher_image">
                    <img :src="t?.image" :alt="t?.name" />
                  </div>
                  <div class="teacher_content">
                    <div class="teacher_content_name">{{ t?.name }}</div>
                    <div class="teacher_content_course_name">
                      {{ t?.course?.name }}
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="pagination">
            <div class="teacher_prev icon">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_87)">
                  <path
                    d="M42.5 22.5C42.5 26.4556 41.327 30.3224 39.1294 33.6114C36.9318 36.9004 33.8082 39.4638 30.1537 40.9776C26.4991 42.4913 22.4778 42.8874 18.5982 42.1157C14.7186 41.344 11.1549 39.4392 8.35787 36.6421C5.56082 33.8451 3.656 30.2814 2.8843 26.4018C2.11259 22.5222 2.50866 18.5008 4.02241 14.8463C5.53616 11.1918 8.09962 8.06823 11.3886 5.8706C14.6776 3.67297 18.5444 2.5 22.5 2.5C27.8043 2.5 32.8914 4.60713 36.6421 8.35786C40.3929 12.1086 42.5 17.1957 42.5 22.5ZM23.0375 12.5C22.7107 12.834 22.5278 13.2827 22.5278 13.75C22.5278 14.2173 22.7107 14.666 23.0375 15L28.75 20.75L11.075 20.75C10.6109 20.75 10.1658 20.9344 9.83757 21.2626C9.50938 21.5907 9.325 22.0359 9.325 22.5C9.325 22.9641 9.50938 23.4092 9.83757 23.7374C10.1658 24.0656 10.6109 24.25 11.075 24.25L28.575 24.25L23.0375 29.7875C22.706 30.119 22.5197 30.5686 22.5197 31.0375C22.5197 31.5063 22.706 31.956 23.0375 32.2875C23.369 32.619 23.8187 32.8053 24.2875 32.8053C24.7563 32.8053 25.206 32.619 25.5375 32.2875L35.375 22.4L25.5125 12.5C25.35 12.3375 25.1571 12.2086 24.9447 12.1206C24.7324 12.0326 24.5048 11.9874 24.275 11.9874C24.0452 11.9874 23.8176 12.0326 23.6053 12.1206C23.3929 12.2086 23.2 12.3375 23.0375 12.5Z"
                    fill="#00D38A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_87">
                    <rect
                      width="45"
                      height="45"
                      fill="white"
                      transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 45 45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="teacher_next icon">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_87)">
                  <path
                    d="M42.5 22.5C42.5 26.4556 41.327 30.3224 39.1294 33.6114C36.9318 36.9004 33.8082 39.4638 30.1537 40.9776C26.4991 42.4913 22.4778 42.8874 18.5982 42.1157C14.7186 41.344 11.1549 39.4392 8.35787 36.6421C5.56082 33.8451 3.656 30.2814 2.8843 26.4018C2.11259 22.5222 2.50866 18.5008 4.02241 14.8463C5.53616 11.1918 8.09962 8.06823 11.3886 5.8706C14.6776 3.67297 18.5444 2.5 22.5 2.5C27.8043 2.5 32.8914 4.60713 36.6421 8.35786C40.3929 12.1086 42.5 17.1957 42.5 22.5ZM23.0375 12.5C22.7107 12.834 22.5278 13.2827 22.5278 13.75C22.5278 14.2173 22.7107 14.666 23.0375 15L28.75 20.75L11.075 20.75C10.6109 20.75 10.1658 20.9344 9.83757 21.2626C9.50938 21.5907 9.325 22.0359 9.325 22.5C9.325 22.9641 9.50938 23.4092 9.83757 23.7374C10.1658 24.0656 10.6109 24.25 11.075 24.25L28.575 24.25L23.0375 29.7875C22.706 30.119 22.5197 30.5686 22.5197 31.0375C22.5197 31.5063 22.706 31.956 23.0375 32.2875C23.369 32.619 23.8187 32.8053 24.2875 32.8053C24.7563 32.8053 25.206 32.619 25.5375 32.2875L35.375 22.4L25.5125 12.5C25.35 12.3375 25.1571 12.2086 24.9447 12.1206C24.7324 12.0326 24.5048 11.9874 24.275 11.9874C24.0452 11.9874 23.8176 12.0326 23.6053 12.1206C23.3929 12.2086 23.2 12.3375 23.0375 12.5Z"
                    fill="#00D38A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_87">
                    <rect
                      width="45"
                      height="45"
                      fill="white"
                      transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 45 45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="about_top">
          <h1>{{ $t("aboutTitle1") }}</h1>
          <p>
            {{ $t("aboutTitle2") }}
          </p>
        </div>
        <div class="about_bottom">
          <div class="about_bottom_image">
            <img :src="about?.image" :alt="about?.title" />
          </div>
          <div class="about_bottom_content">
            <div class="about_bottom_content_title">
              {{ about?.title }}
            </div>
            <div
              class="about_bottom_content_text"
              v-html="`${about?.description}`"
            ></div>
            <div class="about_bottom_content_learn">
              <nuxt-link
                :to="localePath('/about')"
                class="about_bottom_content_learn_btn"
              >
                {{ $t("batafsil") }}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 15.0002V9.00016H12.5V4.16016L20.34 12.0002L12.5 19.8402V15.0002H4.5Z"
                    fill="white"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "~~/store/store"
const store = useStore()
const baseUrl = useRuntimeConfig().public.baseUrl;
const { locale } = useI18n();
const localePath = useLocalePath();
const bannerContent = ref(null);
const load = ref(false);
async function bannerApi() {
  store.loader= true;
  const data = await $fetch(baseUrl + "/habout", {
    headers: {
      lang: locale.value,
    },
  });
  bannerContent.value = data.data;
  store.loader= false;
}
bannerApi();
const teachers = ref(null);
async function teachersApi() {
  store.loader= true;
  const data = await $fetch(baseUrl + "/teachers", {
    headers: {
      lang: locale.value,
    },
  });
  teachers.value = data.data;
  store.loader= false;
}
teachersApi();
const course = ref(null);
async function courseApi() {
  store.loader= true;
  const data = await $fetch(baseUrl + "/courses", {
    headers: {
      lang: locale.value,
    },
  });
  course.value = data.data;
  store.loader= false;
}
courseApi();
const about = ref(null);
async function aboutApi() {
  store.loader= true;
  const data = await $fetch(baseUrl + "/about", {
    headers: {
      lang: locale.value,
    },
  });
  about.value = data.data;
  store.loader= false;
}
aboutApi();
const moon = ref();
onMounted(() => {
  window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const rotation = scrollTop / 10;
    if (moon.value) {
      moon.value.style.transform = "rotate(" + rotation + "deg)";
    }
  });
});
</script>

<style lang="scss" scoped>
</style>