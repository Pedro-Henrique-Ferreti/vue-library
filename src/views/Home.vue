<template>
<div class="home">
  <base-container class="home__content">
    <section class="home__list">
      <router-link v-for="n in 10" :key="n"
        :to="{ name: 'home' }"
      >
        <div class="home__list__item">Botões</div>
      </router-link>
    </section>
  </base-container>
</div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $background-light;
  &__content {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    &__item {
      width: 100%;
      min-height: 56px;
      border: 1px solid $gray-3;
      border-radius: 6px;
      align-items: center;
      background-color: $white;
      padding: 8px;
      transition: border-color 0.2s ease-in-out;
      &:hover {
        border-color: $secondary;
      }
    }
  }
}
</style>
