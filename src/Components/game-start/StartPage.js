'use strict';
import React from 'react';
import { connect } from 'react-redux';
import StartHeader from './StartHeader';
import { getGameSetupStarted } from '../../redux/game-selectors';
import SetupForm from './SetupForm';

class StartPage extends React.Component {
    render(){
        return (
            <div>
                <StartHeader/>
                {this.props.setUpStarted && <SetupForm/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        setUpStarted: getGameSetupStarted(state)
    }
};

export default connect(mapStateToProps)(StartPage);


