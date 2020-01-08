import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import AddLectureDialog from "./StudentAddLecture";
import ModifyDepartmentDialog from "./StudentModifyDepartment";
import compose from "recompose/compose";
import moment from "moment";

const dayarr = [
  {
    day: "monday",
    initial: "Mo",
    dayid: 1
  },
  {
    day: "tuesday",
    initial: "Tu",
    dayid: 2
  },
  {
    day: "wednesday",
    initial: "We",
    dayid: 3
  },
  {
    day: "thursday",
    initial: "Th",
    dayid: 4
  },
  {
    day: "friday",
    initial: "Fr",
    dayid: 5
  },
  {
    day: "saturday",
    initial: "Sa",
    dayid: 6
  }
];

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  rootAvatar: {
    margin: theme.spacing(2)
  },
  bigAvatar: {
    width: 80,
    height: 80,
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)"
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  branchTitle: {
    marginLeft: theme.spacing(1),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 30
  },
  separator: {
    flexGrow: 1
  },
  settingsLectureButton: {
    marginLeft: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  addLectureButton: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  fieldButtonGroup: {
    margin: theme.spacing(1)
  },
  fieldButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  menu: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  card: {
    margin: theme.spacing(1),
    minWidth: 275,
    display: "inline-block",
    background: "linear-gradient(0deg, #fff 95%, #ffca28 10%)"
  },
  cardBreak: {
    margin: theme.spacing(1),
    minWidth: 275,
    display: "inline-block",
    background: "linear-gradient(0deg, #fff 95%, #d84315 70%)"
  },
  breakTitle: {
    fontFamily: "Sniglet",
    color: "#d84315",
    fontSize: 53,
    align: "center"
  },
  fieldTitle: {
    fontFamily: "Open Sans",
    color: "#242729"
  },
  fieldText: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(5)
  }
});

class StudentContent extends Component {
  state = {
    dayAnchorEl: null,
    dayValue: "",
    dayId: "",
    semAnchorEl: null,
    semId: "",
    dialogOpen: false,
    modifyDeptDialogOpen: false
  };

  anchorRef = React.createRef(null);

  dayHandleClick = event => {
    this.setState({
      dayAnchorEl: event.target
    });
  };

  dayHandleClose = (dayid, day) => e => {
    this.setState({
      dayAnchorEl: null,
      dayId: dayid,
      dayValue: day
    });
  };

  semHandleClick = event => {
    this.setState({
      semAnchorEl: event.target
    });
  };

  semHandleClose = sem => event => {
    this.setState({
      semAnchorEl: null,
      semId: sem
    });
  };

  dialogHandleOpen = () => {
    this.setState({
      dialogOpen: true
    });
  };

  dialogHandleClose = () => {
    this.setState({
      dialogOpen: false
    });
  };

  modifyDeptOpen = () => {
    this.setState({
      modifyDeptDialogOpen: true
    });
  };

  modifyDeptClose = () => {
    this.setState({
      modifyDeptDialogOpen: false
    });
    location.reload();
  };

  handleLectDelete = lectureId => e => {
    e.preventDefault();

    const { semId, dayId } = this.state;
    const { deptCode } = this.props;
    const semValue = semId;
    const dayid = dayId;

    Meteor.call("student.removeLecture", deptCode, semValue, dayid, lectureId);
  };

  content() {
    const { activesem } = this.props;
    const { semId, dayId } = this.state;

    const schedule_array = activesem
      .filter(function(d) {
        return d.semid === semId;
      })
      .map(function(d) {
        return d.schedule;
      })[0];

    if (schedule_array && dayId) {
      const lecture_array = schedule_array
        .filter(function(d) {
          return d.dayid === dayId;
        })
        .map(function(d) {
          return d.lecture;
        })[0];

      if (lecture_array) {
        if (lecture_array.length === 0) {
          return (
            <div id="notfound2">
              <div className="notfound2">
                <div className="bee">
                  <div className="bee__wing bee__wing--left"></div>
                  <div className="bee__wing bee__wing--right"></div>
                  <div className="bee__oval bee__oval--top"></div>
                  <div className="bee__rect"></div>
                  <div className="bee__rect"> </div>
                  <div className="bee__oval bee__oval--bottom"></div>
                </div>
                <h2>Lectures</h2>
                <p>Please Add Lectures.</p>
              </div>
            </div>
          );
        }

        return lecture_array.map(
          (
            {
              lectureId,
              endTime,
              breakValue,
              lectureName,
              teacherName,
              startTime
            },
            index
          ) => (
            <React.Fragment key={lectureId}>
              {breakValue === true ? (
                <Card
                  key={lectureId}
                  className={this.props.classes.cardBreak}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography className={this.props.classes.breakTitle}>
                      BREAK
                    </Typography>
                    <Grid container className={this.props.classes.grid}>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          Lecture No:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {index + 1}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={this.props.classes.grid}>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          Start Time:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          className={this.props.classes.fieldText}
                          key={lectureId}
                        >
                          {moment(startTime).format("hh:mm A")}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          End Time:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {moment(endTime).format("hh:mm A")}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      className={this.props.classes.addLectureButton}
                      onClick={this.handleLectDelete(lectureId)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                <Card
                  key={lectureId}
                  className={this.props.classes.card}
                  variant="outlined"
                >
                  <CardContent>
                    <Grid container className={this.props.classes.grid}>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          Lecture No:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {index + 1}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={this.props.classes.grid}>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          Lecture:
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {lectureName}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={this.props.classes.grid}>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          Teacher:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {teacherName}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={this.props.classes.grid}>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          Start Time:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {moment(startTime).format("hh:mm A")}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldTitle}>
                          End Time:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={this.props.classes.fieldText}>
                          {moment(endTime).format("hh:mm A")}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      className={this.props.classes.addLectureButton}
                      onClick={this.handleLectDelete(lectureId)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              )}
            </React.Fragment>
          )
        );
      }
      return (
        <div id="notfound2">
          <div className="notfound2">
            <div className="bee">
              <div className="bee__wing bee__wing--left"></div>
              <div className="bee__wing bee__wing--right"></div>
              <div className="bee__oval bee__oval--top"></div>
              <div className="bee__rect"></div>
              <div className="bee__rect"> </div>
              <div className="bee__oval bee__oval--bottom"></div>
            </div>
            <h2>Lectures</h2>
            <p>Please Add Lectures.</p>
          </div>
        </div>
      );
    }

    return (
      <div id="notfound2">
        <div className="notfound2">
          <div className="bee">
            <div className="bee__wing bee__wing--left"></div>
            <div className="bee__wing bee__wing--right"></div>
            <div className="bee__oval bee__oval--top"></div>
            <div className="bee__rect"></div>
            <div className="bee__rect"> </div>
            <div className="bee__oval bee__oval--bottom"></div>
          </div>
          <h2>Schedule</h2>
          <p>Please Select a Semester and Day.</p>
        </div>
      </div>
    );
  }

  render() {
    const {
      dayAnchorEl,
      dayValue,
      semAnchorEl,
      semId,
      dialogOpen,
      modifyDeptDialogOpen
    } = this.state;
    const { dept, path, activesem, deptCode } = this.props;

    const {
      dayHandleClick,
      dayHandleClose,
      semHandleClick,
      semHandleClose,
      anchorRef,
      dialogHandleOpen,
      dialogHandleClose,
      modifyDeptOpen,
      modifyDeptClose
    } = this;

    return (
      <div className={this.props.classes.rootAvatar}>
        <Grid container className={this.props.classes.grid}>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src={path}
              className={this.props.classes.bigAvatar}
            />
          </Grid>
          <Grid item className={this.props.classes.separator}>
            <Typography className={this.props.classes.branchTitle}>
              {dept}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              className={this.props.classes.settingsLectureButton}
              onClick={modifyDeptOpen}
            >
              Modify
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              className={this.props.classes.addLectureButton}
              onClick={dialogHandleOpen}
            >
              + Add A Lecture
            </Button>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="outlined"
              className={this.props.classes.fieldButtonGroup}
              ref={anchorRef}
              aria-label="split button"
            >
              <Button className={this.props.classes.fieldButton}>
                Semester {semId}
              </Button>
              <Button
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                className={this.props.classes.fieldButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
                size="small"
                onClick={semHandleClick}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Menu
              id="simple-menu"
              anchorEl={semAnchorEl}
              keepMounted
              open={Boolean(semAnchorEl)}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {activesem.map(({ semid }) => (
                <MenuItem
                  key={semid}
                  onClick={semHandleClose(semid)}
                  className={this.props.classes.menu}
                >
                  {semid}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="outlined"
              className={this.props.classes.fieldButtonGroup}
              ref={anchorRef}
              aria-label="split button"
            >
              <Button className={this.props.classes.fieldButton}>
                {dayValue ? dayValue : "day"}
              </Button>
              <Button
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                className={this.props.classes.fieldButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
                size="small"
                onClick={dayHandleClick}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Menu
              id="simple-menu"
              anchorEl={dayAnchorEl}
              keepMounted
              open={Boolean(dayAnchorEl)}
              onClose={dayHandleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {dayarr.map(({ day, dayid }) => (
                <MenuItem
                  key={day}
                  value={day}
                  onClick={dayHandleClose(dayid, day)}
                  className={this.props.classes.menu}
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
        <Divider className={this.props.classes.rootAvatar} />
        <AddLectureDialog
          open={dialogOpen}
          handleClose={dialogHandleClose}
          dept={dept}
          deptCode={deptCode}
          activesem={activesem}
        />
        <ModifyDepartmentDialog
          modifyDeptOpen={modifyDeptDialogOpen}
          modifyDeptHandleClose={modifyDeptClose}
          activesem={activesem}
        />
        <Box className={this.props.classes.box}>{this.content()}</Box>
      </div>
    );
  }
}

export default compose(withStyles(useStyles))(StudentContent);
