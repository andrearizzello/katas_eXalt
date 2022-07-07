import React from 'react';
import {Calendar} from "./Calendar";
// import {getRandomInInterval} from "./utils";
// import {CalendarEvent} from "./interfaces";

// const eventsNumber = 17
// /**
//  * eventList is a generated array that can be used for test.
//  * It will generate random events based on the `eventsNumber` variable
//  * @type {Array<CalendarEvent>}
//  */
// const eventList: Array<CalendarEvent> = Array(eventsNumber).fill(null).map((el, index) => ({
//     id: index,
//     start: `${getRandomInInterval(9, 21)}:${getRandomInInterval(0, 59)}`,
//     duration: getRandomInInterval(1, 90)
// }))

const eventList = [
    {
        "id": 1,
        "start": "17:00",
        "duration": 60
    },
    {
        "id": 2,
        "start": "17:00",
        "duration": 120
    },
    {
        "id": 3,
        "start": "19:40",
        "duration": 10
    },
    {
        "id": 4,
        "start": "15:00",
        "duration": 20
    },
    {
        "id": 5,
        "start": "18:00",
        "duration": 60
    },
    {
        "id": 6,
        "start": "10:25",
        "duration": 35
    },
    {
        "id": 7,
        "start": "10:45",
        "duration": 30
    },
    {
        "id": 8,
        "start": "17:00",
        "duration": 60
    },
    {
        "id": 9,
        "start": "10:00",
        "duration": 30
    },
    {
        "id": 10,
        "start": "11:50",
        "duration": 20
    },
    {
        "id": 11,
        "start": "19:00",
        "duration": 60
    },
    {
        "id": 12,
        "start": "09:00",
        "duration": 45
    },
    {
        "id": 13,
        "start": "14:45",
        "duration": 60
    },
    {
        "id": 14,
        "start": "19:20",
        "duration": 10
    },
    {
        "id": 15,
        "start": "11:50",
        "duration": 30
    },
    {
        "id": 16,
        "start": "11:40",
        "duration": 40
    },
    {
        "id": 17,
        "start": "14:00",
        "duration": 30
    }
]

function App() {
    return <Calendar events={eventList} startTime={'9:00'} endTime={'21:00'}/>;
}

export default App;
