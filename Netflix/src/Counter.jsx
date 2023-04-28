import React, { Component } from 'react';

class Counter extends Component {
  
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <div id="shadow">
      <div id="heading">
        <div id="image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" width="150" height="50"/>
        </div>
        <div id="buttons">
          
          <button id="signin">Sign In</button>&nbsp;&nbsp;&nbsp;
          <button id="signin">Register</button>
        </div>
      </div>

      <div id="main">
        <h1>Unlimited movies, TV shows and more.</h1>
        <p id="p1">Watch anywhere. Cancel anytime.</p>
        <p id="p2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
    </div>
      </div>
    );
  }
}

export default Counter;
