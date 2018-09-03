import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history';
import { Route, Switch } from 'react-router' // react-router v4
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter } from 'connected-react-router'

import rootReducer from '../rootReducer';
import StartPage from './game-start/StartPage';
import BoardWrapper from './game-board/BoardWrapper';
import rootSaga from '../redux/root-saga';

const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    connectRouter(history)(rootReducer),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ),
    )
);

sagaMiddleware.run(rootSaga);

const App = () => (
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={StartPage}/>
                <Route path='/play' component={BoardWrapper}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(App)