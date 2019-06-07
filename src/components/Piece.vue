<template>
<li :class="{win: win}" class="item" :style="{ backgroundImage: `url(${piece.img})`,  backgroundPosition: `${piece.pos.left}px ${piece.pos.top}px`, backgroundSize: `${width}px ${height}px`}"></li>
</template>

<script>
export default {
  name: 'Piece',
  props: ['piece', 'board', 'width', 'height', 'win'],
  data() {
    return {

    }
  },
  mounted() {
    const item = document.querySelectorAll('li');
    this.board[item.length - 1].img = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
    color: rgba(255,255,255,0.8);
    height: 125px;
    padding-left: 10px;
    font-weight: 700;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 18px;
    text-shadow: 0 0 30px rgba(0,0,0,0.8);
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5);

    &.win{
      text-shadow: none;
      box-shadow: none;
      span{
        display: none;
      }
    }
}
</style>
