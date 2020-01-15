import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Locations = new Mongo.Collection("locations");

if (Meteor.isServer) {
  Meteor.publish("locations-list", () => Locations.find());

  var Api = new Restivus({
    prettyJson: true
  });

  Api.addCollection(Locations);
}

Meteor.methods({
  "locations.addresponse"(responseid, responsetext) {
    check(responseid, String);
    check(responsetext, String);

    var taskId = Locations.find({})
      .fetch()
      .filter(function(res) {
        return res.responseid === responseid;
      })
      .map(function(i) {
        return i._id;
      })[0];

    if (taskId) {
      Locations.update(
        { _id: taskId },
        { $set: { responsetext: responsetext } }
      );
    } else {
      Locations.insert({
        responseid,
        responsetext
      });
    }
  },

  "locations.removeresponse"(taskId) {
    check(taskId, String);
    Locations.remove(taskId);
  },

  "locations.addstaffroomlocation"(
    responseText,
    menuDeptCode,
    menuDept
  ) {
    check(responseText, String);
    check(menuDeptCode, String);
    check(menuDept, String);

    Locations.insert({
      responsetext: responseText,
      deptcode: menuDeptCode,
      department: menuDept,
      staffroom: true
    });
  },


  "locations.addlablocation"(
    responseText,
    menuDeptCode,
    menuDept
  ) {
    check(responseText, String);
    check(menuDeptCode, String);
    check(menuDept, String);

    Locations.insert({
      responsetext: responseText,
      deptcode: menuDeptCode,
      department: menuDept,
      lab: true
    });
  }
});
