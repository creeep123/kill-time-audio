import Vue from 'vue';
import VueRouter from 'vue-router';
import AudioPlayer from '/views/audio-player.vue';

Vue.use(VueRouter);

const routes = [{ path: '/', component: AudioPlayer }];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
