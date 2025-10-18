import './stylesheet.css';
import { user, createUserBoard } from './game';
import { renderUserBoard } from './dom';

createUserBoard();
renderUserBoard(user);
