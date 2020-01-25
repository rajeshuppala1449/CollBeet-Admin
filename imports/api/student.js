import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { Random } from "meteor/random";

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

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

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
    deptCode,
    semValue,
    dayid,
    lectureName,
    teacherName,
    startTime,
    endTime,
    breakValue
  ) {
    if (breakValue === false) {
      check(lectureName, String);
      check(teacherName, String);
      check(dayid, Number);
      check(semValue, Number);
      check(startTime, String);
      check(endTime, String);
      check(deptCode, String);

      if (!this.userId) {
        throw new Meteor.Error("not-authorized");
      }

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

      if (!this.userId) {
        throw new Meteor.Error("not-authorized");
      }

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
  },

  "student.removeLecture"(deptCode, semValue, dayid, lectureId) {
    check(deptCode, String);
    check(dayid, Number);
    check(semValue, Number);
    check(lectureId, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

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
        $pull: {
          "activesem.$[outer].schedule.$[inner].lecture": {
            lectureId: lectureId
          }
        }
      },
      {
        arrayFilters: [{ "outer.semid": semValue }, { "inner.dayid": dayid }]
      }
    );
  },

  "student.addDeptSemesters"(addSemestersArr, deptCode) {
    check(deptCode, String);
    const dayArr = [1, 2, 3, 4, 5, 6].map(i => {
      return { dayid: i };
    });

    const semArr = addSemestersArr.sort().map(i => {
      return { semid: i, schedule: dayArr };
    });

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Student.update(
      {
        deptcode: deptCode
      },
      { $push: { activesem: { $each: semArr } } }
    );
  },

  "student.removeDeptSemesters"(deptCode, removeSemestersArr) {
    check(deptCode, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    removeSemestersArr.forEach(i =>
      Student.update(
        {
          deptcode: deptCode
        },
        { $pull: { activesem: { semid: i } } }
      )
    );
  },

  "student.removeDepartment"(taskId) {
    check(taskId, String);
    Student.remove(taskId);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    if (Meteor.isClient) {
      window.location.reload();
    }
  }
});
