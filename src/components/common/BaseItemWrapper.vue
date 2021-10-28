<template>
  <div class="item-wrapper">
    <slot />
    <small class="item-wrapper__description">{{ description }}</small>
  </div>
</template>

<script>
export default {
  name: 'BaseItemWrapper',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  width: 100%;
  flex-direction: column;
  align-items: center;
  &__description {
    margin-top: 16px;
  }
}
</style>
