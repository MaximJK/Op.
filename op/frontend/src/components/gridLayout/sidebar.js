import React from 'react';
import DraftModal from '../drafts/draftModal';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
      };
      }

      modalClick(event) {
        event.preventDefault();
        if (event.currentTarget.id === 'OpsModal') {
          this.setState({
            modal:false
          })
        };
      };

      createDraft() {
        this.setState({
          modal:true
        })
      }

    render(){
      console.log(this.state);
        let drafts = <div></div>;
        if (this.props.drafts != 'empty' && this.props.selected != 'none') {
                drafts = Object.values(this.props.drafts[this.props.selected])
                .map(draft => {
                
                return (
                        <div key={draft.id}>
                            {draft.body}
                            </div>
                ) 
            })
        }
        // create draft modal
        let createDraft = <div></div>;
        if (this.props.drafts != 'empty' && this.props.selected != 'none') {
            createDraft = <button onClick={() => {this.createDraft()}}> new draft </button>
        }

        return (
          <div className='sidebar'>
            <div>
              <div id='OpsModal' style={this.state.modal ? {} :  {display: 'none'}} onClick={e => this.modalClick(e)}>
              </div>
                {this.state.modal && <DraftModal
            
                />}
            </div >
                  {createDraft }
                  {drafts}
          </div>
        )
    }
}

export default Sidebar