import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: this.props.modal
      };
      }

      modalClick(event) {
        event.preventDefault();
        if (event.currentTarget.id === 'OpsModal') {
          this.props.modalOff();
        };
      };

      createDraft() {
        this.props.modalOn();
      }

    render(){
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
        <div id='DraftModal' style={this.props.modal ? {} :  {display: 'none'}} onClick={e => this.modalClick(e)}>
          </div>
            {this.props.modal && <DraftForm
            key={this.state.title}
            id={this.state.id}
            authors= {this.state.authors}
            medium= {this.state.medium}
            description= {this.state.description}
            title= {this.state.title}
            type= {this.state.type}
            />}
          </div >
                {createDraft }
                {drafts}
            </div>
        )
    }
}

export default Sidebar