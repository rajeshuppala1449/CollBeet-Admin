import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Mess = new Mongo.Collection('mess');

if (Meteor.isServer) {
    
    var Api = new Restivus({
        prettyJson: true
      });
    
      // Generates: GET, POST on /api/items and GET, PUT, PATCH, DELETE on
      // /api/items/:id for the Items collection
      Api.addCollection(Mess);
    
    
}

Meteor.methods({

  'mess.insert'(day,dayid,type,fooditems) {
    
    check(day, String);
    check(dayid, Number);
    check(type, String);
    check(fooditems, String);

    Mess.insert({
      [day]:day,
      dayid,
      type,
      fooditems,
    });
  }

});
