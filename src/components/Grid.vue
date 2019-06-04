<template>
  <div class="grid">
    <ul class="gridItem">
      <Piece @click.native="clickPiece" v-for="(index, piece) in boardPieces" :key="piece"/>
    </ul>
  </div>
</template>

<script>
import Piece from '@/components/Piece.vue';
export default {
  name: 'Grid',
  props: [''],
  components:{
    Piece
  },
  data(){
    return{
        boardPieces: 4*4,
        hasPossibleMoves: false
    }
  },
  methods:{
    clickPiece(event){
      console.log(event.currentTarget)
    }
  },
  mounted(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.grid{
  width: 500px;
  margin: 0 auto;
}
  .gridItem{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
</style>
