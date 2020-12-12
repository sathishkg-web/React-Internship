import React, { Component } from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  handleClick = (event) => {
    alert("Get Value: " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      
     <div>
      <p>Enter your name</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input type='button' value="get value" onClick={this.handleClick}
        
      />
      </div>
    );
  }
}

export default MyComponent;
