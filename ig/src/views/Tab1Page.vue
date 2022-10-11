<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="logo"
          />
        </ion-title>
        <div class="icons">
          <ion-icon name="camera-outline"></ion-icon>
          <ion-icon name="paper-plane-outline" slot="end"></ion-icon>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <p></p>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';

export default defineComponent({
  name: 'Tab1Page',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>

<style>
img {
  width: 120px;
}
.icons {
  display: flex;
  justify-content: space-between;
}

ion-toolbar {
}

ion-title {
  --opacity: 0.5;
  margin-top: 3px;
}
</style>
