import React from "react";
import { Link, withRouter } from 'react-router-dom';

class DraftForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.draft
    }

   
    
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        let action = this.defineAction();
        action(this.state).then(() => this.props.history.push(`/ops/${this.props.draft.op}`));
    };

    render () {
        console.log('draft modal')
        return (
            <div className="authDiv">
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Body:</label>
                    <br></br>
                   <div>
                        <textarea
                            className=""
                            value=''
                            rows= '6'
                            onChange=''
                         />
                    </div>

                    <div>
                    <label>Notes:</label>
                    <br></br>
                        <textarea
                            className=""
                            value=''
                            rows='6'
                            onChange=''
                         />
                    </div>
                    
                    <input className="submit"  type="submit" value= 'create'/>
                </form>
            </div>
        );
    }
}
export default withRouter(DraftForm);