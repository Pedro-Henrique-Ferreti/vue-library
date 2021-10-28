<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
