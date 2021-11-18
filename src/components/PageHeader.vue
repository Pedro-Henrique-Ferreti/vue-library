<template>
  <base-container class="page-header">
    <h1 class="page-header__title">
      <slot>All examples</slot>
    </h1>
  </base-container>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style lang="scss" scoped>
.page-header {
  margin-bottom: 24px;
  &__title {
    font-size: 24px;
    font-weight: $font-semibold;
  }
}
</style>