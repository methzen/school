import React from "react";
import Header from "../components/header";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Modal from '../components/common/modal';


const localizer = momentLocalizer(moment);
const events = [{ start: new Date(), end: new Date(), title: "special event" }];
const DnDCalendar = withDragAndDrop(Calendar);

class MyCalendarApp extends React.Component {

  constructor() {
    super();
    this.state = {
      events,
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  onEventResize = (data) => {
    const { start, end } = data;
    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  handleSelect = (event) => {
    console.log(event);
  };

  render() {
    return (
     <div >
      <Header />
      <div className="wrapper">
      <div className="container py-5">
        <DnDCalendar
          className="bg-white"
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: 700, cursor: "pointer" }}
          onSelectSlot={this.showModal}
          onSelectEvent={event => alert(event.title)}
          selectable
        />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Create an event</p>
        </Modal>

      </div>
      </div>
      </div>
    );
  }
}
export default MyCalendarApp;


 

