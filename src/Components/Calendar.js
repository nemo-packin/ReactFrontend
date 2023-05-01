import React, { Component } from 'react';
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "../Styling/CalendarStyles.css";
import axios from "axios";
import NewSchedule from './NewSchedule';

//=============== Calendar Code Start ======================
const styles = {
  wrap: {
    display: "flex",
    width: "50%",
    margin: "10px",
    marginRight: "30px",
    float: "right"
  },
  left: {
    margin: "10px",
    float: "right"
  },
  main: {
    flexGrow: "1",
    float: "right",
    boxShadow: "0 0 16px rgba(0, 0, 0, 0.2"
  }
};

function refreshPage() {
  window.location.reload(false);
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      reloadPage: false,
      makeNewSchedule: false,
      eventsSize: 0,
      reload: 0,
      courseCodes: "",
      courseDays: "",
      courseTimes: "",
      viewType: "Week",
      snapToGrid: false,
      useEventBoxes: "Never",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Create a New Event:", "Event 1");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: 9999,
          text: modal.result,
          backColor: "#cc09238"
        });
      },
      eventMoveHandling: "Enabled",
      onEventMoved: async info => {
        if (info.e.data.id === 9999) {
          // Handle moving event with id 9999
          const dp = this.calendar;
          const e = {
            start: info.newStart,
            end: info.newEnd,
            id: info.e.data.id,
            text: info.e.data.text,
            backColor: "#cc09238"
          }
          console.log(e.data);
          dp.events.update(e);
        }
      },
      eventResizeHandling: "Enabled",
      onEventResized: async info => {
        if (info.e.data.id === 9999) {
          // Handle resizing event with id 9999
          const dp = this.calendar;
          const e = {
            start: info.newStart,
            end: info.newEnd,
            id: info.e.data.id,
            text: info.e.data.text,
            backColor: "#cc09238"
          }
          console.log(e.data);
          dp.events.update(e);
        }
      },
      eventDeleteHandling: "Enabled",
      onEventDelete: async args => {
        const removeCourse = async () => {
          await axios.post('http://localhost:8080/api/removeCourse', {
            code: args.e.data.text
          })
            .then(result => {
              console.log(result)
              if (result.data !== true) {
                console.log("FAILURE")
              } else {
                const dp = this.calendar;
                const e = args.e;
                dp.events.remove(e);
                refreshPage()
              }
            }).catch(error => {
              console.log(error)
            })
        }
        if (args.e.data.id === 9999) {
          const dp = this.calendar;
          const e = args.e;
          dp.events.remove(e);
        } else {
          removeCourse()
        }
      },
      onEventClick: async args => {
        if (args.e.data.id === 9999) {
          const dp = this.calendar;
          const modal = await DayPilot.Modal.prompt("Update Event Text:", args.e.text());
          if (!modal.result) { return; }
          const e = args.e;
          e.data.text = modal.result;
          dp.events.update(e);
        }
      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }


  componentDidMount() {
    axios.get('http://localhost:8080/api/calendar')
      .then(codesAndTimes => {
        console.log(codesAndTimes.data.length === 0)
        if (codesAndTimes.data.length === 0) {
          this.setState({
            makeNewSchedule: true
          })
        } else {
          // this.forceUpdate()
          this.setState({
            courseCodes: codesAndTimes.data[0],
            courseDays: codesAndTimes.data[1],
            courseTimes: codesAndTimes.data[2],
            eventsSize: codesAndTimes.data[0].length
          })

          const cc = codesAndTimes.data[0]
          const cd = codesAndTimes.data[1]
          const ct = codesAndTimes.data[2]
          const es = codesAndTimes.data[0].length

          var events = [];
          for (let i = 0; i < es; i++) {
            //Times
            var startTime;
            var endTime;
            //If the time is a short time add a 0 to the front
            if (ct[i].charAt(1) === ':') {
              //Short PM Start Times
              if (ct[i].charAt(8) === 'P') {
                var n1 = 12 + parseInt(ct[i].charAt(0))
                startTime = "T" + n1 + ct[i].substring(1, 7);
              }
              //Short AM Start Times
              else {
                startTime = "T0" + ct[i].substring(0, 7);
              }

              //Short Start PM End times
              if (ct[i].charAt(8) === 'P') {
                if (ct[i].charAt(12) === '2' && ct[i].charAt(11) === '1') {
                  endTime = "T" + ct[i].substring(11, 19);
                }
                else {
                  var n2 = 12 + parseInt(ct[i].charAt(11))
                  endTime = "T" + n2 + ct[i].substring(12, 18)
                }
              } else if (ct[i].charAt(12) === ":") {
                endTime = "T0" + ct[i].substring(11, 18)
              }
            }
            else {
              startTime = "T" + ct[i].substring(0, 8)
              endTime = "T" + ct[i].substring(12, 20)
            }

            var days = cd[i].length
            var daysStrings = [];
            for (let d = 0; d < days; d++) {
              switch (cd[i].charAt(d)) {
                case 'M':
                  daysStrings.push("2023-05-01")
                  break;
                case "T":
                  daysStrings.push("2023-05-02")
                  break;
                case "W":
                  daysStrings.push("2023-05-03")
                  break;
                case "R":
                  daysStrings.push("2023-05-04")
                  break;
                case "F":
                  daysStrings.push("2023-05-05")
                  break;
                default:
                  break;
              }
            }
            // console.log("Code: " + cc[i])
            // console.log("Days: " + cc[i])
            // console.log("Start: " + startTime)
            // console.log("End: " + endTime)

            for (let x = 0; x < days; x++) {
              events.push(
                {
                  id: i + x,
                  text: cc[i],
                  start: daysStrings[x] + startTime,
                  end: daysStrings[x] + endTime,
                  // start: "2023-05-01T09:00:00",
                  // end: "2023-05-01T09:50:00",
                  backColor: "#cc4125"
                })
            }
          }

          const startDate = "2023-04-30";
          this.calendar.update({ startDate, events });
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.main}>
          {this.state.makeNewSchedule ? <NewSchedule makeNewSchedule={this.state.makeNewSchedule} cal={this} /> : (
            <DayPilotCalendar
              {...this.state}
              ref={this.calendarRef}
            />
          )}

        </div>
      </div>
    );
  }
}

export default Calendar;

//=============== Calendar Code End ======================