import React from "react";
import { Link, withRouter } from 'react-router-dom';

class DraftForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.draft;
    }
    defineAction(){
        if (this.props.type.type === 'create') {
            return this.props.createDraft
        } else {
            return this.props.updateDraft
        }
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        let action = this.defineAction()
        action(this.state);
    };

    render () {
        debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Body:</label>
                    <br></br>
                   <div>
                        <input
                            className=""
                            value={this.state.body}
                            type='text'
                            onChange={this.update('body')}
                         />
                    </div>

                    <div>
                    <label>Notes:</label>
                    <br></br>
                        <input
                            className=""
                            value={this.state.notes}
                            type='text'
                            onChange={this.update('notes')}
                         />
                    </div>
                    
                    <input className="submit"  type="submit" value={this.props.type.type}/>
                </form>
            </div>
        );
    }
}
export default withRouter(DraftForm);