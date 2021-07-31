const { render } = wp.element;

import Game from './react-tictactoe-app/tictactoe';
import { Votes } from './react-vote-app/react-vote';

const game = document.getElementById('react-tictactoe-app');
const votes = document.getElementById(`react-vote-app`);

if (game) {
    render(<Game />,  document.getElementById('react-tictactoe-app'));
} 
else if (votes) {
    render(<Votes />, document.getElementById(`react-vote-app`));
}