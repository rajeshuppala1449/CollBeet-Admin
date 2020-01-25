import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Mess = new Mongo.Collection("mess");

if (Meteor.isServer) {
  Meteor.publish("mess-list", () => Mess.find());

  var Api = new Restivus({
    prettyJson: true
  });

  Api.addCollection(Mess);
}

Meteor.methods({
  "mess.addfood"(day, dayid, type, fooditems) {
    check(day, String);
    check(dayid, Number);
    check(type, String);
    check(fooditems, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    var taskId = Mess.find({})
      .fetch()
      .filter(function(food) {
        return food.type === type && food.dayid === dayid;
      })
      .map(function(i) {
        return i._id;
      })[0];

    if (taskId) {
      Mess.update({ _id: taskId }, { $set: { fooditems: fooditems } });
    } else {
      Mess.insert({
        day,
        dayid,
        type,
        fooditems
      });
    }
  },

  "mess.removefood"(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Mess.remove(taskId);
  }
});
