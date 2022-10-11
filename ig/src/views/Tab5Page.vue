<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-icon name="person-outline"></ion-icon>
        <ion-title>John Snow</ion-title>
        <ion-icon name="send-outline" slot="end"></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-grid>
          <ion-row>
            <ion-col size="3">
              <ion-avatar>
                <img
                  src="https://avatars.githubusercontent.com/u/51836145?v=4"
                />
              </ion-avatar>
            </ion-col>
            <ion-col>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <b>755</b>
                    <br />
                    <small>posts</small>
                  </ion-col>
                  <ion-col>
                    <b>4.6M</b>
                    <br />
                    <small>followers</small>
                  </ion-col>
                  <ion-col>
                    <b>121</b>
                    <br />
                    <small>following</small>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-button size="small" color="gray"
                    >Edit Profile</ion-button
                  >
                  <ion-button color="gray"
                    ><ion-icon icon="cog-outline"
                  /></ion-button>
                </ion-row>
              </ion-grid>
            </ion-col>
          </ion-row>
        </ion-grid>
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
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab5Page',
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>

<style scoped>
ion-grid {
  text-align: center;
}

ion-avatar {
  height: 70px;
  width: 70px;
}

ion-button {
  padding-left: 30px;
}
</style>
