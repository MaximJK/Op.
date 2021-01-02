import React from 'react';

class DraftColumn extends React.Component {

    componentDidUpdate(prevProps) { 
        debugger
        if (this.props.selected !== prevProps.selected) {
        this.props.fetchDrafts(this.props.selected);
        }
    }

    render(){

        return (
            <ul>

            </ul>
        )
    }
}

export default DraftColumn;