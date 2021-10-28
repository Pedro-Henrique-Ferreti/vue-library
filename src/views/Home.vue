<template>
<page-header />
<div class="home">
  <base-container class="home__content">
    <section class="home__list">
      <router-link
        v-for="component in displayableComponents" :key="component.id"
        :to="{ name: 'components', params: { id: component.id } }">
        <div class="home__list__item">{{ component.name }}</div>
      </router-link>
    </section>
  </base-container>
</div>
</template>

<script>
import displayableComponents from '@/data/displayableComponents.js';
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'Home',
  components: {
    PageHeader,
  },
  data() {
    return {
      displayableComponents,
    };
  },
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
