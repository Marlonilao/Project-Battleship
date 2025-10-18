import './stylesheet.css';
import { computer, user } from './game';
import { renderUserBoard, renderOpponentBoard } from './dom';

renderUserBoard(user);
renderOpponentBoard(computer);
