<template>
  <base-container class="page-title">
    <h1 class="page-title__title">Todos os exemplos</h1>
  </base-container>
</template>

<script>
export default {
  name: 'ThePageTitle',
};
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 24px;
  &__title {
    font-size: 24px;
    font-weight: $font-semibold;
  }
}
</style>