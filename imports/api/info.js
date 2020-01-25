import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Info = new Mongo.Collection("info");

if (Meteor.isServer) {
  Meteor.publish("info-list", () => Info.find());

  var Api = new Restivus({
    prettyJson: true
  });

  Api.addCollection(Info);
}

Meteor.methods({
  "info.addresponse"(responseid, responsetext) {
    check(responseid, String);
    check(responsetext, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    var taskId = Info.find({})
      .fetch()
      .filter(function(res) {
        return res.responseid === responseid;
      })
      .map(function(i) {
        return i._id;
      })[0];

    if (taskId) {
      Info.update({ _id: taskId }, { $set: { responsetext: responsetext } });
    } else {
      Info.insert({
        responseid,
        responsetext
      });
    }
  },

  "info.removeresponse"(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Info.remove(taskId);
  }
});
