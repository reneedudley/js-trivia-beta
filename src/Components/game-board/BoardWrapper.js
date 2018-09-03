'use strict';
import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getStartTime } from '../../redux/game-selectors';
import { push } from 'connected-react-router';

import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';

class BoardWrapper extends React.Component {
    componentDidMount() {
        const { startTime, onGoToSetUp } = this.props;
        // if (!startTime) {
        //     onGoToSetUp()
        // }
    }
    render(){
        return (
            <div style={{
                background: '#4F6367',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                <AppBar position="absolute" style={{backgroundColor: '#E9D758'}}>
                    <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
                        <Typography variant="title" style={{color: 'rgb(80, 99, 103)', fontWeight: 600, fontSize: '40px'}}>
                            Javascript Trivia
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{marginTop: '80px', display: 'flex', justifyContent: 'space-between' }}>
                    <GameBoard/>
                    <ScoreBoard/>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGoToSetUp: () => {
      dispatch(push('/'))
    },
  }
};

const mapStateToProps = (state) => {
  return {
      startTime: getStartTime(state)
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(BoardWrapper);


