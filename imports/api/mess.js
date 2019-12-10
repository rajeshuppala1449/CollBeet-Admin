import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('mess');

if (Meteor.isServer) {
    // Add Server Side Code Here
}

Meteor.methods({

  'mess.insert'(day,dayid,type,fooditems) {
    
    check(day, String);
    check(dayid, Number);
    check(type, String);
    check(fooditems, String);

    Tasks.insert({
      day,
      dayid,
      type,
      fooditems,
    });
  }

});
