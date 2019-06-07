(function(t){function i(i){for(var n,s,a=i[0],c=i[1],d=i[2],h=0,l=[];h<a.length;h++)s=a[h],r[s]&&l.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(i);while(l.length)l.shift()();return o.push.apply(o,d||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],n=!0,a=1;a<e.length;a++){var c=e[a];0!==r[c]&&(n=!1)}n&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function s(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(e,n,function(i){return t[i]}.bind(null,n));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=i,a=a.slice();for(var d=0;d<a.length;d++)i(a[d]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("main",{attrs:{id:"app"}},[e("Game")],1)},o=[],s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"grid"},[e("ul",{ref:"grid",staticClass:"grid__gridItem"},t._l(t.board,function(i,n){return e("Piece",{key:n,ref:"item",refInFor:!0,attrs:{piece:i,board:t.board,width:t.gridWidth,height:t.gridHeight,win:t.win},nativeOn:{click:function(e){return t.clickPiece(i,n)}}})}),1),e("div",{staticClass:"grid__sideBar"},[e("div",{staticClass:"grid__left"},[e("div",{staticClass:"grid__moves"},[e("h2",[t._v("Moves")]),e("p",[t._v(t._s(t.moves))])]),e("button",{staticClass:"grid__resetBoard",attrs:{type:"button",name:"button"},on:{click:t.resetBoard}},[t._v("Reset Game")])]),t.win?e("h2",{staticClass:"grid__title"},[t._v("Congratulations!")]):t._e(),e("div",{staticClass:"grid__preview"},[e("p",{staticClass:"grid__previewCopy"},[t._v("Preview Image")]),e("img",{staticClass:"grid__previewImg",attrs:{src:this.shuffleImg,alt:""}})])])])},a=[],c=(e("7514"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"item",class:{win:t.win},style:{backgroundImage:"url("+t.piece.img+")",backgroundPosition:t.piece.pos.left+"px "+t.piece.pos.top+"px",backgroundSize:t.width+"px "+t.height+"px"}})}),d=[],u={name:"Piece",props:["piece","board","width","height","win"],data:function(){return{}},mounted:function(){var t=document.querySelectorAll("li");this.board[t.length-1].img=""}},h=u,l=(e("b3b2"),e("2877")),f=Object(l["a"])(h,c,d,!1,null,"4be95a21",null),p=f.exports,g={name:"Game",props:[""],components:{Piece:p},data:function(){return{size:16,rowSize:4,board:[],moves:0,win:!1,img:["/../assets/img1.png","/../assets/img2.png","/../assets/img3.png","/../assets/img4.png"],gridHeight:0,gridWidth:0}},mounted:function(){this.renderBoard(),this.shuffle(this.board),this.loadImage()},methods:{clickPiece:function(t,i){var e=t.x,n=t.y,r=this.board.find(function(t){return t.x===e&&t.y===n-1});this.isInBounds(r)&&this.checkPosition(r,i);var o=this.board.find(function(t){return t.x===e-1&&t.y===n});this.isInBounds(o)&&this.checkPosition(o,i);var s=this.board.find(function(t){return t.x===e&&t.y===n+1});this.isInBounds(s)&&this.checkPosition(s,i);var a=this.board.find(function(t){return t.x===e+1&&t.y===n});this.isInBounds(a)&&this.checkPosition(a,i)},renderBoard:function(){for(var t=this.$refs.grid.clientWidth,i=t/this.rowSize,e=0;e<this.size;e++){var n=Math.floor(e/this.rowSize),r=e-Math.floor(e/this.rowSize)*this.rowSize;this.board.push({x:n,y:r,id:e,img:this.shuffleImg,pos:{left:i*r*-1,top:i*n*-1}})}},isInBounds:function(t){return void 0!=t&&(t.x>=0&&t.x<=this.board.length-1&&t.y>=0&&t.y<=this.board.length-1)},shuffle:function(t){var i,e,n,r=t.length-1;while(r>0)e=Math.floor(Math.random()*r),r--,i=t[r].pos,t[r].pos=t[e].pos,t[e].pos=i,n=t[r].id,t[r].id=t[e].id,t[e].id=n;return t},winCondition:function(){for(var t=0;t<this.board.length;t++)if(this.board[t].id!==t)return;this.win=!0},checkPosition:function(t,i){if(!t.img){var e=t.id;t.img=this.board[i].img,t.pos=this.board[i].pos,t.id=this.board[i].id,this.board[i].id=e,this.board[i].img="",this.moves++,this.winCondition()}},resetBoard:function(){var t=this.$refs.item;this.board=[],this.moves=0,this.win=!1,this.renderBoard(),this.shuffle(this.board),this.board[t.length-1].img=""},loadImage:function(){var t=this,i=setInterval(function(){var e=t.$refs.grid.clientHeight,n=t.$refs.grid.clientWidth;clearInterval(i),t.gridHeight=e,t.gridWidth=n},100)}},computed:{shuffleImg:function(){return this.img[Math.floor(Math.random()*this.img.length)]}}},b=g,m=(e("bb9a"),Object(l["a"])(b,s,a,!1,null,null,null)),v=m.exports,_=e("2f62");n["a"].use(_["a"]);var w=new _["a"].Store({state:{image:"/../assets/DSC_7836.jpg"}}),y={name:"app",components:{Game:v}},x=y,P=(e("5c0b"),Object(l["a"])(x,r,o,!1,null,null,null)),I=P.exports;n["a"].config.productionTip=!1,new n["a"]({store:w,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";var n=e("5e27"),r=e.n(n);r.a},"5e27":function(t,i,e){},"953d":function(t,i,e){},b3b2:function(t,i,e){"use strict";var n=e("953d"),r=e.n(n);r.a},bb9a:function(t,i,e){"use strict";var n=e("be05"),r=e.n(n);r.a},be05:function(t,i,e){}});
//# sourceMappingURL=app.fb415a05.js.map