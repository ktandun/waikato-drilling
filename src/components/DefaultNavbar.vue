<template>
  <!-- navbar -->
  <div class="navbar-wrapper">
    <div class="navbar padding-responsive" :class="{ border: props.border }">
      <router-link :to="{ name: 'home' }">
        <picture>
          <source media="(min-width: 768px)" :srcset="logoMedium" />
          <img :src="logoSmall" alt="logo" />
        </picture>
      </router-link>
      <div class="flex nav-links">
        <router-link class="nav-link" :to="{ name: 'contact' }">CONTACT</router-link>
        <a @click="toggleNav" class="hamburger-menu">
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
      <router-link :to="{ name: 'contact' }">CONTACT</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoMedium from '@/assets/logo-medium.svg'
import logoSmall from '@/assets/logo-small.svg'

const props = defineProps<{
  border: boolean
}>()

const toggleNav = () => {
  const navLinksMobile = document.querySelector('.nav-links-mobile')
  navLinksMobile?.classList.toggle('open')

  const topNav = document.querySelector('.navbar')
  topNav?.classList.toggle('open')
}
</script>

<style scoped>
/* Navbar */
.navbar-wrapper {
  position: absolute;
  top: 32px;
  left: 32px;
  right: 32px;
  max-width: 1296px;
  margin-left: auto;
  margin-right: auto;
}

.navbar {
  background-color: var(--shadow);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--border-radius);
  transition: 0.5s ease;

  &.border {
    border: 1px solid var(--stroke, rgba(255, 255, 255, 0.25));
  }
}

.nav-links-mobile {
  display: flex;
  flex-direction: column;
  height: 0;
  background-color: var(--dark);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  text-align: right;
  gap: 16px;
  transform: scale(1, 0);
  transition: 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: top;
}

.nav-links-mobile a {
  text-align: right;
  color: var(--white);
  text-decoration: none;
  font-size: 18px;
}

@media (max-width: 767px) {
  .navbar-wrapper {
    position: absolute;
    top: var(--padding-mobile);
    left: var(--padding-mobile);
    right: var(--padding-mobile);
  }

  .nav-links-mobile.open {
    transform: scale(1, 1);
    height: auto;
  }

  .navbar.open {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}

.navbar .nav-links {
  gap: 16px;
}

.navbar a {
  text-align: center;
  color: var(--white);
  text-decoration: none;
  font-size: 18px;
}

.navbar .nav-link {
  display: none;
}

@media (min-width: 768px) {
  .navbar {
    padding: 32px 48px 32px 32px;
    border-radius: var(--border-radius);
  }

  .navbar .nav-links {
    gap: 24px;
  }

  .navbar .nav-link {
    display: inline;
  }

  .navbar .hamburger-menu {
    display: none;
  }
}

@media (min-width: 1200px) {
  .navbar .nav-links {
    gap: calc(1vw + 40px);
  }
}
</style>
