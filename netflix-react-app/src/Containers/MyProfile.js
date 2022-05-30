import React, { Component } from 'react'

class MyProfile extends Component {
  // JS <=> JSX
  state = {
    profileName: 'john'
  }

  handleProfileNameChange = (event) => {
    console.log(event.target.value);

    this.setState({
      profileName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Profile Info</h3>
        <p>Update Profile Name</p>
        {/*  the following input w/o onChange Handler will become just
           read-only field. Refer console */}
        <input value={this.state.profileName} 
          onChange={this.handleProfileNameChange}/>
        <p>Profile Name: {this.state.profileName}</p>
      </div>
    )
  }
}

export default MyProfile;