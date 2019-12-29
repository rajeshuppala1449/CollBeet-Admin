import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { Random } from 'meteor/random'

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

    const dayArr = [1, 2, 3, 4, 5, 6].map(i => {
      return { dayid: i };
    });

    const semArr = semesters.sort().map(i => {
      return { semid: i, schedule: dayArr };
    });

    Student.insert({
      dept: menuDept,
      avpath: menuPath,
      deptcode: menuDeptCode,
      activesem: semArr
    });
  },

  "student.addLecture"(
    lectureName,
    teacherName,
    dayid,
    semValue,
    startTime,
    endTime,
    breakValue,
    deptCode
  ) {
    if (breakValue === false) {
      check(lectureName, String);
      check(teacherName, String);
      check(dayid, Number);
      check(semValue, Number);
      check(startTime, String);
      check(endTime, String);
      check(deptCode, String);

      Student.rawCollection().update(
        {
          deptcode: deptCode,
          activesem: {
            $elemMatch: {
              semid: semValue,
              "schedule.dayid": dayid
            }
          }
        },
        {
          $push: {
            "activesem.$[outer].schedule.$[inner].lecture": {
              lectureId: Random.id(),
              lectureName: lectureName,
              teacherName: teacherName,
              startTime: startTime,
              endTime: endTime,
              breakValue: breakValue
            }
          }
        },
        {
          arrayFilters: [{ "outer.semid": semValue }, { "inner.dayid": dayid }]
        }
      );
    } else {
      check(dayid, Number);
      check(semValue, Number);
      check(startTime, String);
      check(endTime, String);
      check(deptCode, String);

      Student.rawCollection().update(
        {
          deptcode: deptCode,
          activesem: {
            $elemMatch: {
              semid: semValue,
              "schedule.dayid": dayid
            }
          }
        },
        {
          $push: {
            "activesem.$[outer].schedule.$[inner].lecture": {
              lectureId: Random.id(),
              startTime: startTime,
              endTime: endTime,
              breakValue: breakValue
            }
          }
        },
        {
          arrayFilters: [{ "outer.semid": semValue }, { "inner.dayid": dayid }]
        }
      );
    }
  }
});
