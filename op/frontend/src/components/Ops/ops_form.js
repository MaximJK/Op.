import React from "react";
import { Link, withRouter } from 'react-router-dom';

class OpsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.op;
    }
    defineAction(){
        if (this.props.type.type === 'create') {
            return this.props.createOp
        } else {
            return this.props.updateOp
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
        
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    
                    <label>title</label>
                    <br></br>
                   <div>
                        <input
                            className=""
                            value={this.state.title}
                            type='text'
                            onChange={this.update('title')}
                         />
                    </div>

                    <div>
                    <label>medium</label>
                    <br></br>
                        <input
                            className=""
                            value={this.state.medium}
                            type='text'
                            onChange={this.update('medium')}
                         />
                    </div>

                    <div>
                    <label>description</label>
                    <br></br>
                        <textarea
                            className=""
                            value={this.state.description}
                            rows="12"
                            onChange={this.update('description')}
                         />
                    </div>
                    
                    <input className="submit"  type="submit" value={this.props.type.type}/>
                </form>
            </div>
        );
    }
}
export default withRouter(OpsForm);