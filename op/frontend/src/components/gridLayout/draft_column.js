import React from 'react';

class DraftColumn extends React.Component {

    componentDidMount() {
        this.props.fetchDrafts(this.props.op)
    }

    render(){

        return (
            <ul>

            </ul>
        )
    }
}

export default withRouter(DraftColumn)