import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

var Count = new Mongo.Collection('count');

class Counter extends React.Component {
  render() {
    var {ready, count} = this.props;
    if(!ready){
      return <div>loading</div>
    }
    return <div style={{fontSize: 50}}>{count}</div>
  }
}

export default createContainer(
  (props) => {
    var subscription = Meteor.subscribe('count');
    
    return {
      ready: subscription.ready(),
      count: subscription.ready() && Count.find({}).fetch()[0].count
    }
  }
, Counter);