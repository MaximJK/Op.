import React from 'react';
import OpColumnContainer from './op_column_container';
import { Link, withRouter } from 'react-router-dom';


class Grid extends React.Component {

    render(){
        return (
            <div className='grid' >
                < OpColumnContainer />
                <div>x</div>
                <div>x</div>
                <div>x</div>

                {/* draft column
                main canvas
                info bar */}
            </div>
        )
    }
}

export default withRouter(Grid)