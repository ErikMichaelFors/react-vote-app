const { render, useState } = wp.element;

import Game from './tictactoe';
import { Votes } from './react-vote';

const game = document.getElementById('react-tictactoe-app');
const votes = document.getElementById(`react-vote-app`);

if (game){
    render(<Game />,  document.getElementById('react-tictactoe-app'));
} else if (votes && Votes){
    console.log("VOTES");
    render(<Votes />, document.getElementById(`react-vote-app`));
}

