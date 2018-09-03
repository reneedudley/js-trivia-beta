import { combineReducers } from 'redux';
import game from './redux/game-reducer';

const state = combineReducers({
    game
});

export default state;