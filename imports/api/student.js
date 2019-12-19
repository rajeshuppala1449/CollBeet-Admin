import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Student = new Mongo.Collection("student");

if (Meteor.isServer) {
  Meteor.publish("student-schedule", () => Student.find());

  var Api = new Restivus({
    prettyJson: true
  });

  Api.addCollection(Student);
}

Meteor.methods({
  "student.addDept"(menuDept, menuPath, menuDeptCode, semesters) {
    check(menuDept, String);
    check(menuPath, String);
    check(menuDeptCode, String);

    const semArr = semesters.sort().map(i => {
      return { semid: i };
    });
    Student.insert({
      dept: menuDept,
      avpath: menuPath,
      deptcode: menuDeptCode,
      activesem: semArr
    });
  }
});
