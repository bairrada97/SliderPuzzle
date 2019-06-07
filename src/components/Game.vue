<template>
<div class="grid" ref="gridContainer">
  <ul class="grid__gridItem" ref="grid">
    <Piece ref="item" @click.native="clickPiece(piece, index)" v-for="(piece, index) in board" :key="index" :piece="piece" :board="board" :width="gridWidth" :height="gridHeight" :win="win" />
  </ul>
  <div class="grid__sideBar">
    <div class="grid__left">
      <div class="grid__moves">
        <h2>Moves</h2>
        <p>{{moves}}</p>
      </div>
      <button type="button" name="button" @click="resetBoard" class="grid__resetBoard">Reset Game</button>
    </div>
    <div class="grid__win" v-if="win" ref="winContainer">
      <div class="grid__winContainer">
        <span class="grid__winClose" @click="closeWin">X</span>
        <h2 class="grid__title">Congratulations!</h2>
        <button @click="playAgain" type="button" name="button" class="grid__winButton">Play Again</button>
      </div>
    </div>

    <div class="grid__preview">
      <img class="grid__previewImg" :src="this.shuffleImg" alt="">
    </div>
  </div>

</div>
</template>

<script>
import Piece from '@/components/Piece.vue';
export default {
  name: 'Game',
  props: [''],
  components: {
    Piece
  },
  data() {
    return {
      size: 16,
      rowSize: 4,
      board: [],
      moves: 0,
      win: true,
      img: ['/../assets/img1.png', '/../assets/img2.png', '/../assets/img3.png', '/../assets/img4.png', '/../assets/img5.png', '/../assets/img6.png', '/../assets/img7.png', '/../assets/img8.png'],
      gridHeight: 0,
      gridWidth: 0

    }
  },

  mounted() {

    this.renderBoard();
    this.shuffle(this.board);
    this.loadImage();
    const height = (this.$refs.grid.clientWidth - '40') / this.rowSize;
    this.$refs.grid.style.gridTemplateRows = `repeat(4, ${height}px)`;

  },
  methods: {
    clickPiece(target, index) {
      const {
        x,
        y
      } = target;

      //check if there is a piece with Image on top, left, right or bottom, if there is a "next" piece with no image the target goes there

      const left = this.board.find(piece => piece.x === x && piece.y === y - 1);
      if (this.isInBounds(left)) this.checkPosition(left, index);

      const top = this.board.find(piece => piece.x === x - 1 && piece.y === y);
      if (this.isInBounds(top)) this.checkPosition(top, index);

      const right = this.board.find(piece => piece.x === x && piece.y === y + 1);
      if (this.isInBounds(right)) this.checkPosition(right, index);

      const bottom = this.board.find(piece => piece.x === x + 1 && piece.y === y);
      if (this.isInBounds(bottom)) this.checkPosition(bottom, index);

    },
    renderBoard() {
      const widthGrid = this.$refs.grid.clientWidth,
        widthPiece = (widthGrid - '40') / this.rowSize;

      //render board, each piece will have the properties below

      for (let r = 0; r < this.size; r++) {
        let x = Math.floor(r / this.rowSize),
          y = r - (Math.floor(r / this.rowSize) * this.rowSize);

        this.board.push({
          x: x,
          y: y,
          id: r,
          img: this.shuffleImg,
          pos: {
            left: (widthPiece * y * -1),
            top: (widthPiece * x * -1),
          }
        });
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
        tempPos, index, tempID


      //shuffle the game, and swap only background position and ID;

      while (counter > 0) {

        index = Math.floor(Math.random() * counter);
        counter--;

        tempPos = board[counter].pos;
        board[counter].pos = board[index].pos;
        board[index].pos = tempPos;

        tempID = board[counter].id;
        board[counter].id = board[index].id;
        board[index].id = tempID;

      }
      return board;
    },
    winCondition() {

      //if the all of pieces ID match with index, win
      for (var i = 0; i < this.board.length; i++) {
        if (this.board[i].id === i) continue
        else return
      }
      document.querySelector('body').style.overflow = 'hidden';
      this.win = true;
    },
    checkPosition(direction, index) {
      //if the next position dont has image, swap background position and ID with the target

      if (!direction.img) {
        let id = direction.id;
        direction.img = this.board[index].img;
        direction.pos = this.board[index].pos;
        direction.id = this.board[index].id;
        this.board[index].id = id;
        this.board[index].img = "";
        this.moves++;
        this.winCondition();

      }
    },
    resetBoard() {
      const item = this.$refs.item;
      this.board = [];
      this.moves = 0;
      this.win = false;
      this.renderBoard();
      this.shuffle(this.board);
      this.board[item.length - 1].img = "";
    },
    loadImage() {
      //Since images render after the lifecycle is done I did a setInterval to get the width and height of the grid, to use as background size of each piece
      const loadImage = setInterval(() => {
        const height = this.$refs.grid.clientHeight,
          width = this.$refs.grid.clientWidth;
        clearInterval(loadImage);
        this.gridHeight = height - '40';
        this.gridWidth = width - '40';

      }, 100);
    },
    playAgain() {
      this.board = [];
      this.renderBoard();
      this.shuffle(this.board);
      this.loadImage();
      const height = (this.$refs.grid.clientWidth - '40') / this.rowSize;
      this.$refs.grid.style.gridTemplateRows = `repeat(4, ${height}px)`;
      document.querySelector('body').style.overflow = 'auto';
      this.win = false;
    },
    closeWin() {
      this.win = false;
    }
  },
  computed: {
    shuffleImg() {
      return this.img[Math.floor(Math.random() * this.img.length)]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
$main-bg-color: #5e5eff;
$white-bg-color: #fff;

.grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    &__title {
        font-size: 20px;
        margin-bottom: 30px;
        font-weight: bold;
        text-transform: uppercase;
        color: $main-bg-color;

    }

    &__sideBar {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        height: 500px;
        width: 250px;
        margin-left: 60px;
        padding: 20px;
        background: $white-bg-color;

        @media screen and (max-width: 874px) {
            height: auto;
            width: 100%;
            max-width: 500px;
            margin-left: 0;
            margin-top: 30px;
            flex-direction: column-reverse;
        }

    }

    &__left {
        display: flex;

        @media screen and (max-width: 874px) {
            width: 100%;
            margin-top: 30px;
        }
    }

    &__moves {
        text-align: right;
        font-size: 20px;
        color: $main-bg-color;
        font-size: 12px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        margin-right: 60px;

        p {
            margin-top: 10px;
            text-align: left;
            font-size: 30px;
            color: #d3d2e4;
        }
    }

    &__gridItem {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        background: $white-bg-color;
        padding: 20px;
        max-width: 500px;

    }

    &__resetBoard {
        border: 0;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        border: 1px solid $main-bg-color;
        background: $white-bg-color;
        color: $main-bg-color;
        text-align: center;
        padding: 10px 20px;
        text-transform: uppercase;
        border-radius: 1px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            border: 1px solid $main-bg-color;
            background: $main-bg-color;
            color: $white-bg-color;

        }

        @media screen and (max-width: 874px) {
            margin-left: auto;
        }
    }

    &__preview {
        @media screen and (max-width: 874px) {
            text-align: center;
        }
    }

    &__previewImg {
        width: 100%;

        @media screen and (max-width: 874px) {
            width: 70%;
        }
    }

    &__win {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }

    &__winContainer {

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $white-bg-color;
        width: calc(500px - 40px);
        height: 40%;
        box-shadow: 0 0 30px rgba(0,0,0, 0.2);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media screen and (max-width: 874px) {
            width: calc(100% - 40px);
        }

    }

    &__winButton {
        @extend .grid__resetBoard;
        text-align: center;
        margin: 0 auto;
    }

    &__winClose {
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 0;
        padding: 20px;

        color: $main-bg-color;

        @media screen and (max-width: 874px) {
            padding: 10%;
        }

    }
}
</style>
