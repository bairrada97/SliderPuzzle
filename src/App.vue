<template>
<main id="app">
  <Game />
</main>
</template>

<script>
import Game from '@/components/Game.vue';
import store from './store';

export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style lang="scss">
@import '@/styles/reset.scss';

body{
  @media screen and (max-width: 874px) {
      overflow: auto;

  }
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7f7;

    @media screen and (max-width: 874px) {
        height: auto;

    }


}


</style>
