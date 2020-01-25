import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Announcements = new Mongo.Collection("announcements");

if (Meteor.isServer) {
  Meteor.publish("announcements-message", () => Announcements.find());

  var Api = new Restivus({
    prettyJson: true
  });

  Api.addCollection(Announcements);
}

Meteor.methods({
  "announcements.addMessage"(announcementMessage, time) {
    check(announcementMessage, String);
    check(time, Number);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Announcements.insert({
      message: announcementMessage,
      time
    });
  },
  "announcements.removeMessage"(messageId) {
    check(messageId, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Announcements.remove(messageId);
  }
});
