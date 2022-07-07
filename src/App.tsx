import React from 'react';
import {Calendar} from "./Calendar";
import {getRandomInInterval} from "./utils";
import {CalendarEvent} from "./interfaces";

const eventsNumber = 17
/**
 * eventList is a generated array that can be used for test.
 * It will generate random events based on the `eventsNumber` variable
 * @type {Array<CalendarEvent>}
 */
const eventList: Array<CalendarEvent> = Array(eventsNumber).fill(null).map((el, index) => ({
    id: index,
    start: `${getRandomInInterval(9, 21)}:${getRandomInInterval(0, 59)}`,
    duration: getRandomInInterval(1, 90)
}))

function App() {
    return <Calendar events={eventList} startTime={'9:00'} endTime={'21:00'}/>;
}

export default App;
