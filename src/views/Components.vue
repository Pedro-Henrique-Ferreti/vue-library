<template>
  <page-header>{{ displayedComponent.name }}</page-header>
  <component :is="displayedComponent.component" />
</template>

<script>
import displayableComponents from '@/data/displayableComponents.js';

import PageHeader from '@/components/PageHeader.vue';
import BaseButtonDisplay from '@/components/display/BaseButtonDisplay.vue';

export default {
  name: 'Components',
  components: {
    PageHeader,
    BaseButtonDisplay,
  },
  computed: {
    displayedComponent() {
      return displayableComponents.find(component => component.id === this.$route.params.id);
    },
  },
};
</script>
