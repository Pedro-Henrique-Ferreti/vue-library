<template>
  <header class="header">
    <base-container class="header__content">
      <router-link class="header__logo" :to="{ name: 'home' }">Vue Library</router-link>
    </base-container>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
  background-color: $secondary;
  margin-bottom: 24px;
  &__content {
    justify-content: center;
  }
  &__logo {
    font-size: 24px;
    font-weight: $font-semibold;
    color: $text-lighter;    
  }
}
</style>
