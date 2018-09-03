'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../../redux/game-selectors';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ScoreBoard extends React.Component {
    renderRows() {
        const { teams } = this.props;

        return teams.reduce((acc, team, key) =>{
            acc.push(
                <TableRow key={key}>
                    <TableCell>{team.get('name')}</TableCell>
                    <TableCell>{team.get('points')}</TableCell>
                </TableRow>
            );
            return acc;
        },[])
    }

    render(){
        return (
            <div>
                <Card style={{
                    marginRight: '10px',
                    backgroundColor: '#F2F2F2',
                }}>
                    <CardContent>
                        <Typography color="textSecondary" align='center'>
                            Scoreboard
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Team</TableCell>
                                    <TableCell>Points</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.renderRows()}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
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
    teams: getTeams(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);


