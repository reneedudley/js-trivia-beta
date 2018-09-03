import { Map, fromJS } from 'immutable';
import { questions } from './functions';

const initialGame = Map({
    startTime: null,
    gameMemo: '',
    gameSetupStarted: false,
    numOfTeams: 2,
    teams: Map(),
    questions: fromJS(questions)
});

export default (gameState = initialGame, action) => {
    switch (action.type) {
        case 'GAME_SET_MEMO': return gameState.set('gameMemo', action.memo);
        case 'GAME_START_SETUP': return gameState.set('gameSetupStarted', action.bool);
        case 'GAME_SET_NUMBER_OF_TEAMS': return gameState.set('numOfTeams', action.num);
        case 'GAME_SET_START_TIME': return gameState.set('startTime', action.time);
        case 'GAME_SET_TEAM': return gameState.setIn(['teams' , action.id], action.team);
        case 'GAME_RESET': return initialGame;
        default: return gameState;
    }
};
