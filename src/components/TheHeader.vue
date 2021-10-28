<template>
  <header class="header">
    <base-container class="header__content">
      Vue Library
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
    color: $text-lighter;
    font-size: 24px;
    font-weight: $font-semibold;
    justify-content: center;
  }
}
</style>
