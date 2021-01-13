import React from 'react';
import OpColumnContainer from './op_column_container';
import DraftColumnContainer from './draft_column_container';
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { ProtectedRoute } from '../../util/route_util';
import Sidebar from './sidebar_container';



class Grid extends React.Component {
    

    render(){
        
        return (
            <div className='grid' >
                <OpColumnContainer selected={this.props.selected}/>
                <Switch>
                <Route path={'/ops/:opid/:draftid?'} component={DraftColumnContainer}/>
                </Switch>
                <div>op canvas</div>
                <Sidebar/>

                {/*
                main canvas
                info bar */}
            </div>
        )
    }
}

export default withRouter(Grid)