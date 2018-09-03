'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/playArrow';
import { List, Map } from 'immutable';
import { gameSetNumberOfTeams, gameSetMemo,
    gameSetTeam, gameStart } from '../../redux/game-actions';
import { getNumberOfTeams, getMemo, getTeams } from '../../redux/game-selectors';
import posed from 'react-pose';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


const Form = posed.form({
    open: {
        y: '0%',
        delayChildren: 200,
        staggerChildren: 100
    },
    closed: { y: '-100%', delay: 300 }
});

const FormChild = posed.div({
    open: { y: 0, opacity: 1 },
    closed: { y: 30, opacity: 0 }
});

const ButtonWrapper = posed.div({
    visible: {
        y: '0%',
        opacity: 1
    },
    hidden: { y: '100%', delay: 300, opacity: 0 }
});

class SetupForm extends React.Component {
    state = {
        isOpen: false
    };

    componentDidMount() {
        this.setState({isOpen: true})
    }

    renderTeamOptions(){
        return List().setSize(5).map((item, key) => {
            const value = (key+2).toString();
            return (
                <FormControlLabel
                    value={value}
                    key={key}
                    control={<Radio color="primary"/>}
                    label={value}
                    labelPlacement="end"
                />
            )
        })
    }

    renderTeamNameFields() {
        const { numOfTeams, onSetTeam,
            teams } = this.props;

        return List().setSize(numOfTeams).map((item, key) => {
            const team = name => Map({id: key, name, points: 0});

            return (
                <TextField
                    key={key}
                    style={{marginRight: '10px'}}
                    label={`Team ${key+1}`}
                    value={teams.getIn([key, 'name'])}
                    onChange={e => onSetTeam(key, team(e.target.value))}
                    margin="normal"
                />
            )
        })
    }

    renderLabel(text){
        return (
            <FormChild>
                <FormLabel component="legend"
                    style={{color: '#4F6367', fontSize: '22px', marginTop: '10px'}}>
                    {text}
                </FormLabel>
            </FormChild>
        )
    }

    isFormValid() {
        const { teams, numOfTeams } = this.props;
        return teams.count() == numOfTeams && teams.every(item => item.get('name'));
    }

    handleStart=(e)=>{
        const { onStartGame } = this.props;
        e.preventDefault();
        onStartGame();
    };

    renderStartButton() {
        return (
            <ButtonWrapper pose={this.isFormValid() ? 'visible' : 'hidden'}>
                <Button
                    variant="extendedFab"
                    aria-label="Start Game"
                    size="large"
                    onClick={this.handleStart}
                    style={{backgroundColor: '#4F6367', color: '#e9d758'}}
                >
                    Start Game
                    <PlayArrow  style={{marginLeft: 10}}/>
                </Button>
            </ButtonWrapper>
        )
    }

    render(){
        const { numOfTeams, onSetNumOfTeams,
            memo, onSetMemo } = this.props;

        return (
            <div style={{height: '50vh', background: 'rgb(233, 215, 88)',display: 'flex', flexDirection: 'column'}}>
                <Form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}
                    pose={this.state.isOpen ? 'open' : 'closed'}
                >
                    {this.renderLabel('Number of Teams')}

                    <FormChild>
                        <RadioGroup
                            aria-label="Number of teams"
                            name="Teams"
                            value={numOfTeams.toString()}
                            style={{flexDirection: 'row'}}
                            onChange={e => onSetNumOfTeams(Number(e.target.value))}
                        >
                            {this.renderTeamOptions()}
                        </RadioGroup>
                    </FormChild>

                    {this.renderLabel('Team Names')}

                    <FormChild style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {this.renderTeamNameFields()}
                    </FormChild>

                    {this.renderLabel('Any Notes for the game?')}

                    <FormChild>
                        <TextField
                            label="Memo"
                            value={memo}
                            onChange={e => onSetMemo(e.target.value)}
                            margin="normal"
                        />
                    </FormChild>

                    {this.renderStartButton()}

                </Form>
            </div>
        )
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetNumOfTeams: (num) => {
            dispatch(gameSetNumberOfTeams(num))
        },
        onSetMemo: (memo) => {
            dispatch(gameSetMemo(memo))
        },
        onSetTeam: (id, team) => {
            dispatch(gameSetTeam(id, team))
        },
        onStartGame: () => {
            dispatch(gameStart())
        },

    }
};

const mapStateToProps = (state) => {
    return {
        numOfTeams: getNumberOfTeams(state),
        memo: getMemo(state),
        teams: getTeams(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupForm);


