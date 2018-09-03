'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/settings';
import { gameStartSetup } from '../../redux/game-actions';
import { getGameSetupStarted } from '../../redux/game-selectors';
import posed from 'react-pose';

const ButtonWrapper = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

const StartHeader =({ setUpStarted, onStartSetup })=> {

    const height = setUpStarted ? '50vh' : '100vh';

    return (
        <div style={{
            height, background: '#4F6367',
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', flexDirection: 'column'}}
        >
            <Typography
                variant="display4"
                gutterBottom
                style={{color: '#E9D758', fontWeight: 600, textAlign: 'center'}}
            >
                JavaScript Trivia
            </Typography>
            <ButtonWrapper pose={setUpStarted ? 'hidden' : 'visible'}>
                <Button
                    variant="extendedFab"
                    aria-label="Setup Game"
                    size="large"
                    onClick={onStartSetup}
                    style={{backgroundColor: '#e9d758', color: '#4F6367'}}
                >
                    Setup Game
                    <Settings  style={{marginLeft: 10}}/>
                </Button>
             </ButtonWrapper>
        </div>
    )

};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartSetup: () => {
            dispatch(gameStartSetup(true))
        },
    }
};

const mapStateToProps = (state) => {
    return {
        setUpStarted: getGameSetupStarted(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartHeader);


