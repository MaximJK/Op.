import React from "react";
import { Link, withRouter } from 'react-router-dom';

class OpsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.op;
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
            <div >
                <form onSubmit={this.handleSubmit}>
                    
                    <label>title</label>
                    <br></br>
                   <div>
                        <input
                            className=""
                            type='text'
                            onChange={this.update('title')}
                         />
                    </div>

                    <div>
                    <label>medium</label>
                    <br></br>
                        <input
                            className=""
                            placeholder=""
                            type='text'
                            onChange={this.update('medium')}
                         />
                    </div>

                    <div>
                    <label>description</label>
                    <br></br>
                        <textarea
                            className=""
                            placeholder="describe your Op here"
                            rows="12"
                            onChange={this.update('medium')}
                         />
                    </div>

                    <input className="submit"  type="submit" value={this.props.type.type}/>
                </form>
            </div>
        );
    }
}
export default withRouter(OpsForm);