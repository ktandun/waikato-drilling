<template>
  <div class="hero">
    <div class="hero-text-wrapper">
      <div class="hero-text">
        HORIZONTAL DIRECTIONAL DRILLING SPECIALISTS
        <div>
          <button class="primary">CONTACT US</button>
        </div>
      </div>
    </div>

    <!-- navbar -->
    <div class="navbar-wrapper">
      <div class="navbar padding-responsive">
        <a href="/">
          <picture>
            <source media="(min-width: 768px)" :srcset="logoMedium" />
            <img :src="logoSmall" alt="logo" />
          </picture>
        </a>
        <div class="flex nav-links">
          <a href="#" class="nav-link">CONTACT</a>
          <a href="javascript:toggleNav();" class="hamburger-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              style="width: 18px; height: 18px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="nav-links-mobile padding-responsive">
        <a href="#">CONTACT</a>
      </div>
    </div>

    <div class="footer-wrapper">
      <div class="hero-footer padding-responsive flex">
        <div>
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
        <div>
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
          45A MĀNUKA STREET, TAUHARA, TAUPŌ 3378, NEW ZEALAND
        </div>
        <div>
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
          ENQUIRES@WAIKATODRILLING.CO.NZ
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoMedium from '@/assets/logo-medium.svg'
import logoSmall from '@/assets/logo-small.svg'
</script>

<style lang="css" scoped>
/* hero */
.hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('@/assets/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;

  /* Footer */
  .footer-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0px;
  }

  .footer-wrapper .hero-footer {
    gap: 16px;
    background-color: var(--primary);
    font-weight: var(--font-bold);
    color: var(--white);
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    .footer-wrapper .hero-footer {
      padding: 8px 72px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.hero .hero-text-wrapper {
  position: absolute;
  top: var(--padding-mobile);
  left: var(--padding-mobile);
  right: var(--padding-mobile);
  top: 25%;
  margin-left: auto;
  margin-right: auto;
}

.hero-text-wrapper .hero-text {
  font-size: var(--heading-3);
  font-weight: var(--font-bold);
  color: var(--white);
  max-width: 90vw;
}

.hero-text-wrapper .hero-text button {
  display: inline-block;
}

@media (min-width: 768px) {
  .hero .hero-text-wrapper {
    position: absolute;
    top: var(--padding-tablet);
    left: var(--padding-tablet);
    right: var(--padding-tablet);
    max-width: 1296px;
    top: 35%;
  }

  .hero-text-wrapper .hero-text {
    font-size: var(--heading-1);
    max-width: 600px;
  }
}

@media (min-width: 1200px) {
  .hero .hero-text-wrapper {
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    right: var(--padding);
    max-width: 1296px;
    top: 35%;
  }

  .hero-text-wrapper .hero-text {
    font-size: var(--heading-1);
    max-width: 600px;
  }
}
</style>
