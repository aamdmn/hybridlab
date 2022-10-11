<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon name="home-outline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon name="search-outline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon name="add-circle-outline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon name="heart-outline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon name="person-outline"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    };
  },
});
</script>

<style scoped></style>
