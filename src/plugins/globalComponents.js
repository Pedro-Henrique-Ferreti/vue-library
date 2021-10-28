import BaseContainer from '@/components/common/BaseContainer.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseItemWrapper from '@/components/common/BaseItemWrapper.vue';

export default {
  install(app) {
    app.component('base-container', BaseContainer);
    app.component('base-button', BaseButton);
    app.component('base-item-wrapper', BaseItemWrapper);
  }
};