import './stylesheet.css';
import { computer, user } from './game';
import { renderUserBoard, renderOpponentBoard, userTurnToAttack } from './dom';

renderUserBoard(user);
renderOpponentBoard(computer);

let activePlayer = user;
userTurnToAttack();
