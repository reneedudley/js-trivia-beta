export const gameStartSetup = (bool) => ({
    type: 'GAME_START_SETUP',
    bool
});

export const gameSetMemo = (memo) => ({
    type: 'GAME_SET_MEMO',
    memo
});

export const gameSetNumberOfTeams = (num) => ({
    type: 'GAME_SET_NUMBER_OF_TEAMS',
    num
});

export const gameSetTeam = (id, team) => ({
    type: 'GAME_SET_TEAM',
    id,
    team
});

export const gameSetStartTime = (time) => ({
    type: 'GAME_SET_START_TIME',
    time
});

export const GAME_START = 'GAME_START';

export const gameStart = () => ({
    type: GAME_START,
});