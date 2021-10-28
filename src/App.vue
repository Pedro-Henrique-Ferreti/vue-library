<template>
  <the-header />
  <the-page-title />
  <router-view />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import ThePageTitle from '@/components/ThePageTitle.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    ThePageTitle,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
