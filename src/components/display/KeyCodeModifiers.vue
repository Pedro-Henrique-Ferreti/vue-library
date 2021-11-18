<template>
  <base-container>
    <input
      type="text"
      @keypress.q="logPressedKey('q')"
      @keypress.enter="logPressedKey('Enter')"
      @keypress.8="logPressedKey('8')"
    />
  </base-container>
</template>

<script>
export default {
  name: 'KeyCodeModifiers',
  methods: {
    logPressedKey(key) {
      console.log(`Key '${key}' was pressed!`);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: 1px solid $primary;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  height: 56px;
  padding: 0 16px;
  &:focus {
    outline: none;
  }
}
</style>
