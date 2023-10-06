import React from 'react';

class ProfileStatus extends React.Component  {
  state={
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    if (this.props.isAuth) {
      this.setState({
        editMode: !this.state.editMode
      });
    }
  }

  deActivateEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value, 
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <> 
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deActivateEditMode}/>
        </div>
        }
      </>
    )
  }
}

export default ProfileStatus;