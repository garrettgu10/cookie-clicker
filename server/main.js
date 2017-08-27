import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  var Count = new Mongo.Collection('count');
  if(Count.find({}).fetch().length === 0) {
    Count.insert({count: 0});
  }
  Meteor.publish('count', () => {
    console.log(Count.find({}).fetch());
    return Count.find({});
  })

  Meteor.methods({
    'increment': function() {
      Count.update({}, {$inc: {count: 1}});
    }
  })
});