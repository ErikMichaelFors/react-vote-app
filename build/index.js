!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=React},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),i=n.n(s);function a(e){return Object(r.createElement)("button",{className:"square "+(e.winningSquare?e.winningSquare:""),onClick:e.onClick},e.value)}class o extends i.a.Component{renderSquare(e){return Object(r.createElement)(a,{key:e,value:this.props.squares[e],winningSquare:this.props.winningCombination&&this.props.winningCombination.includes(e)?"winning-square":null,onClick:()=>this.props.onClick(e)})}renderBoard(){let e=[],t=0;for(let n=0;n<3;n++){let n=[];for(let e=0;e<3;e++)n.push(this.renderSquare(t++));e.push(Object(r.createElement)("div",{className:"board-row"},n))}return e}render(){return Object(r.createElement)("div",null,this.renderBoard())}}class l extends s.Component{constructor(e){super(e),this.state={history:[{squares:Array(9).fill(null),latestMove:null,winningCombination:null}],stepNumber:0,xIsNext:!0,isAscending:!0}}handleClick(e){const t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1],r=n.squares.slice(),s=c(r);if(s||r[e])return n.winningCombination=s,void this.setState({history:t});r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r,latestMove:u(e)}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}jumpTo(e){this.setState({stepNumber:e,xIsNext:e%2==0})}toggleOrder(){this.setState({isAscending:!this.state.isAscending})}render(){const e=this.state.history,t=e[this.state.stepNumber],n=c(t.squares),s=e.map((e,t)=>{const n=t?"Go to move # "+t+", (col: "+e.latestMove[0]+", row: "+e.latestMove[1]+")":"Go to game start";return Object(r.createElement)("li",{key:t},Object(r.createElement)("button",{onClick:()=>this.jumpTo(t)},t===this.state.stepNumber?Object(r.createElement)("b",null,n):n))});let i;return i=n?"Winner: "+(this.state.xIsNext?"O":"X"):9===this.state.stepNumber?"It's a Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),Object(r.createElement)("div",{className:"game"},Object(r.createElement)("div",{className:"game-board"},Object(r.createElement)(o,{squares:t.squares,winningCombination:n,onClick:e=>this.handleClick(e)})),Object(r.createElement)("div",{className:"game-info"},Object(r.createElement)("div",null,i),Object(r.createElement)("button",{onClick:()=>this.toggleOrder()},this.state.isAscending?"Descending":"Ascending"),Object(r.createElement)("ol",{className:this.state.isAscending?"ascending":"descending"},s)))}}function c(e){const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n=0;n<t.length;n++){const[r,s,i]=t[n];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return t[n]}return null}function u(e){const t=[[0,3,6],[1,4,7],[2,5,8]],n=[[0,1,2],[3,4,5],[6,7,8]];let r,s;for(let i=0;i<3;i++)t[i].includes(e)&&(r=i),n[i].includes(e)&&(s=i);return[r,s]}var m=l;const{useState:d}=wp.element,{render:p}=wp.element,b=document.getElementById("react-tictactoe-app"),h=document.getElementById("react-vote-app");b?p(Object(r.createElement)(m,null),document.getElementById("react-tictactoe-app")):h&&p(Object(r.createElement)(()=>{const[e,t]=d(0);return Object(r.createElement)("div",null,Object(r.createElement)("h2",null,e," Votes by Michael"),Object(r.createElement)("p",null,Object(r.createElement)("button",{className:"testing",onClick:()=>{t(e+1)}},"Vote!")))},null),document.getElementById("react-vote-app"))}]);