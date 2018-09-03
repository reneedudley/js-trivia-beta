'use strict'
import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import StackGrid, { transitions, easings } from "react-stack-grid";
const { flip } = transitions;
import { getQuestions } from '../../redux/game-selectors';


class GameBoard extends React.Component {
    renderCards (category) {
        return category.map((question, key) =>{
            if (question.team) return null
            return (
                <div
                    style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: '#e9d758',
                        borderRadius: '99px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    key={key}
                >
                    <Typography variant="body2" style={{}}>
                        {question.get('value')}
                    </Typography>
                </div>
            )
        });
    }

    renderGrids() {
        const { questions } = this.props;
        return questions.reduce((acc, category, key) => {
            acc.push(
                <div key={key}>
                    <Typography variant="title" style={{color: 'rgb(233, 215, 88)', fontWeight: 600, fontSize: '30px'}}>
                        {key}
                    </Typography>
                    <StackGrid
                        columnWidth={100}
                        duration={480}
                        gutterWidth={3}
                        gutterHeight={5}
                        easing={easings.quartOut}
                        appear={flip.appear}
                        appeared={flip.appeared}
                        enter={flip.enter}
                        entered={flip.entered}
                        leaved={flip.leaved}
                    >
                        {this.renderCards(category)}
                    </StackGrid>
                </div>
            );
            return acc;
        },[])
    }

    render(){
        return (
            <div style={{width: '70%'}}>
                {this.renderGrids()}
           </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (arr) => {
      dispatch((arr))
    },
  }
};

const mapStateToProps = (state) => {
  return {
    questions: getQuestions(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);


