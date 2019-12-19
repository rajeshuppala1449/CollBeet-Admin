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

    const semArr = semesters.map(i => {
      return { semId: i };
    });

    var taskId = Student.find({})
      .fetch()
      .filter(function(d) {
        return d.dept === menuDept && d.deptcode === menuDeptCode;
      })
      .map(function(i) {
        return i._id;
      })[0];

    if (taskId) {
      throw new Meteor.Error("dept already exists");
    } else {
      Student.insert({
        dept: menuDept,
        avpath: menuPath,
        deptcode: menuDeptCode,
        activesemesters: semArr
      });
    }
  }
});
