import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Mess = new Mongo.Collection("mess");

if (Meteor.isServer) {

  Meteor.publish('mess', function messPublication() {
    return Mess.find({});
  });

  var Api = new Restivus({
    prettyJson: true
  });

  Api.addCollection(Mess);
}

Meteor.methods({
  "mess.insert"(day, dayid, type, fooditems) {
    check(day, String);
    check(dayid, Number);
    check(type, String);
    check(fooditems, String);

    Mess.insert({
      day,
      dayid,
      type,
      fooditems
    });
  }
});
