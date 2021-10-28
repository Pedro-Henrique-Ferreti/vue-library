<template>
  <div class="button-display">
    <base-item-wrapper v-for="n in 25" :key="n" description="Basic/Default">
      <base-button></base-button>
    </base-item-wrapper>
  </div>
</template>

<script>
export default {
  name: 'BaseButtonDisplay',
};
</script>

<style lang="scss" scoped>
.button-display {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 16px;
}
</style>
