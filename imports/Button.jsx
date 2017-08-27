import React, {Component} from 'react';

export default class Button extends Component {
  handlePress(event) {
    Meteor.call("increment");
  }

  render() {
    return(
      <div>
        <a className='cookie' onTouchTap={this.handlePress}>
          <img src="/cookie.png" />
        </a>
      </div>
    )
  }
}