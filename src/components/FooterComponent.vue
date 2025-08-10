<template>
  <div style="background-color: var(--charcoal)">
    <div class="flex flex-col max-w-1200 page-padding">
      <div class="flex flex-col-small-row text-white gap-16 footer">
        <div>
          <img class="logo" :src="logoLarge" loading="lazy" />
        </div>
        <div class="flex flex-col gap-16 contact">
          <p>Contact</p>
          <div class="flex flex-row gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              style="width: 14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p class="flex-1">
              106 Vaughan Road, Ngapuna, <br />
              Rotorua 3010, New Zealand
            </p>
          </div>
          <div class="flex flex-row gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              style="width: 14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            enquires@waikatodrilling.co.nz
          </div>
          <div class="flex flex-row gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              style="width: 14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            0800 433 7455
          </div>
        </div>
      </div>

      <div class="footer-qualifications">
        <div class="separator upperline"></div>

        <div class="flex justify-between flex-col-small-row content">
          <p class="font-bold text-white">Waikato Drilling - All Rights Reserved</p>
          <div class="flex flex-col-small-row images">
            <div><img :src="sheprequal" height="42" loading="lazy" /></div>
            <div><img :src="sitewise" height="42" loading="lazy" /></div>
            <div><img :src="impacprequal" height="42" loading="lazy" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoLarge from '@/assets/logo-large.png'
import sheprequal from '@/assets/sheprequal.png'
import sitewise from '@/assets/sitewise.jpg'
import impacprequal from '@/assets/impacprequal.jpg'
</script>

<style scoped>
/* footer */
.footer .contact {
  padding: 0px var(--padding-mobile);
  align-items: start;
  justify-content: start;
}

.footer .logo {
  height: 60px;
  width: auto;
}

@media (min-width: 768px) {
  .footer {
    padding: 0px var(--padding-tablet);
    justify-content: space-between;
    align-items: center;
  }

  .footer .logo {
    height: 80px;
    width: auto;
  }
}

@media (min-width: 1200px) {
  .footer {
    padding: 0px var(--padding);
    justify-content: space-between;
    align-items: center;
  }

  .footer .logo {
    height: 100px;
    width: auto;
  }
}

.footer-qualifications .upperline {
  margin-top: 20px;
  margin-bottom: 20px;
}

.footer-qualifications .content {
  align-items: start;
  gap: 16px;
}

.footer-qualifications .content .images {
  gap: 16px;
}

@media (min-width: 768px) {
  .footer-qualifications .content {
    align-items: center;
    gap: 24px;
  }

  .footer-qualifications .content .images {
    gap: 24px;
  }
}

.footer-qualifications img {
  max-width: 70vw;
}
</style>
