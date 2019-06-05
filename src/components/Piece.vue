<template>
  <li :style="{ backgroundImage: `url(${piece.img})`,  backgroundPosition: `${piece.pos.left}px ${piece.pos.top}px`}"></li>
</template>

<script>
export default {
  name: 'Piece',
  props: ['piece', 'board'],
  data(){
    return{
    
    }
  },
  mounted(){
    const item = document.querySelectorAll('li');
    this.board[item.length - 1].img = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  li{
    height: 107px;
  }
</style>
