import { createSelector } from 'reselect';

export const getGameState = state => {
    return state.game;
};

export const getGameSetupStarted = createSelector(
    getGameState,
    game => game.get('gameSetupStarted')
);

export const getNumberOfTeams = createSelector(
    getGameState,
    game => game.get('numOfTeams')
);

export const getMemo = createSelector(
    getGameState,
    game => game.get('gameMemo')
);

export const getTeams = createSelector(
    getGameState,
    game => game.get('teams')
);

export const getStartTime = createSelector(
    getGameState,
    game => game.get('startTime')
);