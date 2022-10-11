<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-ios">
        <ion-segment @ionChange="segmentChanged($event)" class="toolbar-ios">
          <ion-segment-button class="header-button">
            <ion-label>Friends</ion-label>
          </ion-segment-button>
          <ion-segment-button class="header-button">
            <ion-label>Enemies</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Likes</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <p>justin liked your photo <span class="min">54m.</span></p>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m.</span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m.</span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m.</span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">72m.</span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">34m.</span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo. <span class="min">44m</span></ion-label
          >
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m. </span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m. </span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m. </span></ion-label
          >
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://media.vanityfair.com/photos/600da23a8553b24e8cc33f42/1:1/w_2616,h_2616,c_limit/1202421980"
            />
          </ion-avatar>
          <ion-label
            >justin liked your photo <span class="min">54m. </span></ion-label
          >
        </ion-item>
      </ion-list>
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
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab4Page',
  components: { IonHeader, IonToolbar, IonContent, IonPage },
});
</script>

<style>
.min {
  color: #999;
}
.toolbar-ios {
  padding: 4px;
  min-height: 44px;
  width: 100%;
  background: white;
}
.header-button {
  background-color: transparent;
  /* border-bottom-width: 2px; */
}
</style>
