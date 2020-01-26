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
  "student.addDept"(menuDept, menuInitials, menuDeptCode, semesters) {
    check(menuDept, String);
    check(menuInitials, String);
    check(menuDeptCode, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    const semArr = semesters.sort().map(i => {
      return { semid: i, schedule: [] };
    });

    Student.insert({
      dept: menuDept,
      initials: menuInitials,
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

      Student.update(
        {
          deptcode: deptCode,
          activesem: {
            $elemMatch: {
              semid: semValue
            }
          }
        },
        {
          $push: {
            "activesem.0.schedule": {
              lectureId: Random.id(),
              lectureName: lectureName,
              teacherName: teacherName,
              startTime: startTime,
              endTime: endTime,
              breakValue: breakValue,
              dayid: dayid
            }
          }
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

      Student.update(
        {
          deptcode: deptCode,
          activesem: {
            $elemMatch: {
              semid: semValue
            }
          }
        },
        {
          $push: {
            "activesem.0.schedule": {
              lectureId: Random.id(),
              startTime: startTime,
              endTime: endTime,
              breakValue: breakValue,
              dayid: dayid
            }
          }
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

    Student.update(
      {
        deptcode: deptCode,
        activesem: {
          $elemMatch: {
            semid: semValue
          }
        }
      },
      {
        $pull: {
          "activesem.0.schedule": {
            lectureId: lectureId
          }
        }
      }
    );
  },

  "student.addDeptSemesters"(addSemestersArr, deptCode) {
    check(deptCode, String);

    const semArr = addSemestersArr.sort().map(i => {
      return { semid: i, schedule: [] };
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
