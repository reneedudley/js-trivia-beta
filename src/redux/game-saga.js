import { fromJS } from 'immutable';
import { put, takeEvery, all, select , call} from 'redux-saga/effects';
import { GAME_START } from './game-actions';
import { push } from 'connected-react-router';
import { gameSetStartTime } from './game-actions';

export function* startSaga(action) {
    yield put(gameSetStartTime(new Date()));
    yield put(push('/play'))
}


export function* gameSaga() {
    yield all([
        takeEvery(GAME_START, startSaga),
    ])
}