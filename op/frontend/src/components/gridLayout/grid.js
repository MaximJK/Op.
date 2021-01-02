import React from 'react';
import OpColumnContainer from './op_column_container';
import DraftColumnContainer from './draft_column_container';
import { Link, withRouter } from 'react-router-dom';


class Grid extends React.Component {

    render(){
        return (
            <div className='grid' >
                <OpColumnContainer/>
                <DraftColumnContainer/>
                <div>op canvas</div>
                <div>op column</div>

                {/* draft column
                main canvas
                info bar */}
            </div>
        )
    }
}

export default withRouter(Grid)