<template>
<div class="grid">
  <ul class="gridItem">
    <Piece @click.native="clickPiece(piece, index)" v-for="(piece, index) in board" :key="piece.id" :piece="piece" :board="board" />
  </ul>
  <p>{{moves}}</p>
</div>
</template>

<script>
import Piece from '@/components/Piece.vue';
export default {
  name: 'Grid',
  props: [''],
  components: {
    Piece
  },
  data() {
    return {
      size: 16,
      board: [],
      moves: 0

    }
  },

  mounted() {
    this.renderBoard();
    this.shuffle(this.board);
    console.log(this.board);
  },
  methods: {
    clickPiece(target, index) {
      const {
        x,
        y
      } = target;

      const left = this.board.find(piece => piece.x === x && piece.y === y - 1)
      if (this.isInBounds(left)) {
        if (!left.img) {
          left.img = this.board[index].img;
          left.pos = this.board[index].pos;
          this.board[index].img = "";
          this.moves++;
          return;
        }
      }

      const top = this.board.find(piece => piece.x === x - 1 && piece.y === y)
      if (this.isInBounds(top)) {
        if (!top.img) {
          top.img = this.board[index].img;
          top.pos = this.board[index].pos;
          this.board[index].img = "";
          this.moves++;
          return;
        }
      }

      const right = this.board.find(piece => piece.x === x && piece.y === y + 1)
      if (this.isInBounds(right)) {
        if (!right.img) {
          right.img = this.board[index].img;
          right.pos = this.board[index].pos;
          this.board[index].img = "";
          this.moves++;
          return;
        }
      }

      const bottom = this.board.find(piece => piece.x === x + 1 && piece.y === y)
      if (this.isInBounds(bottom)) {
        if (!bottom.img) {
          bottom.img = this.board[index].img;
          bottom.pos = this.board[index].pos;
          this.board[index].img = "";
          this.moves++;
          return;
        }
      }


    },
    renderBoard() {

      for (let r = 0; r < this.size; r++) {
        let x = Math.floor(r / 4),
            y = r - (Math.floor(r / 4) * 4);

        this.board.push({
          x: x,
          y: y,
          id: r,
          img: '/../assets/hero.jpg',
          pos: {
            left: ('107' * y * -1),
            top: ('107' * x * -1),
          }
        }); //create new column

      }


    },
    isInBounds(target) {
      if (target != undefined) {
        return (target.x >= 0 && target.x <= this.board.length - 1) && (target.y >= 0 && target.y <= this.board.length - 1)
      } else {
        return false
      }

    },
    shuffle(board) {
      let counter = board.length - 1,
        temp, index,
        boardCopy = board.slice();
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = boardCopy[counter];

        boardCopy[counter] = boardCopy[index];
        boardCopy[index] = temp;
      }


      for (var i = 0; i < this.size; i++) {
        board[i].pos = boardCopy[i].pos;
      }

      return board;
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid {
    width: 500px;
    margin: 0 auto;
}
.gridItem {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

}
</style>
