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

/*
  --- You can also export a function --- 

  export default function(app) {
    app.component('base-container', BaseContainer);
  }
*/