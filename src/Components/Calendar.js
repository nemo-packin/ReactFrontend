import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";
import "../Styling/CalendarStyles.css";

//=============== Calendar Code Start ======================
const styles = {
    wrap: {
      display: "flex",
      width: "50%",
      margin: "10px",
      float: "right"
    },
    left: {
      margin: "10px",
      float: "right"
    },
    main: {
      flexGrow: "1",
      float: "right"
    }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
        if (!modal.result) { return; }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {

    const events = [
      {
        id: 1,
        text: "Event 1",
        start: "2023-03-07T10:30:00",
        end: "2023-03-07T13:00:00",
        backColor: "#cc4125"
      },
      {
        id: 2,
        text: "Event 2",
        start: "2023-03-08T09:30:00",
        end: "2023-03-08T11:30:00",
        backColor: "#cc4125"
      },
      {
        id: 3,
        text: "Event 3",
        start: "2023-03-08T12:00:00",
        end: "2023-03-08T15:00:00",
        backColor: "#cc4125"
      },
      {
        id: 4,
        text: "Event 4",
        start: "2023-03-06T11:30:00",
        end: "2023-03-06T14:30:00",
        backColor: "#cc4125"
      },
    ];

    const startDate = "2023-03-07";

    this.calendar.update({startDate, events});

  }

  render() {
    return (
      <div style={styles.wrap}>        
        {/* <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={2}
            skipMonths={3}
            startDate={"2023-04-16"}
            selectionDay={"2023-04-22"}
            onTimeRangeSelected={ args => {
              this.calendar.update({
                startDate: args.day
              });
            }}
          />
        </div> */}
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;

//=============== Calendar Code End ======================