import {dateSorter, eventGroupCreator, totalInterval} from "../utils";

export interface CalendarEvent {
    id: number,
    start: string,
    duration: number
}
export interface CalendarProps {
    eventList: CalendarEvent[],
    calendarStartTime: string,
    calendarEndTime: string
}

/**
 * divCalendar generates the style for the calendar.
 * It uses the "Grid" system and its size is dependent on the total time duration of the calendar
 * @param {string} startTime - The starting time of the calendar
 * @param {string} endTime - The ending time of the calendar
 */
const divCalendar = (startTime: string, endTime: string) => ({
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateRows: `repeat(
        ${totalInterval(startTime, endTime).length("minutes")}, 
        calc(100vh / ${totalInterval(startTime, endTime).length("minutes")})
    )`
})

export const Calendar = ({eventList, calendarStartTime, calendarEndTime}: CalendarProps) => {
    return <div style={divCalendar(calendarStartTime, calendarEndTime)}>
        {eventGroupCreator(eventList.sort(dateSorter)).map((eventGroup, index) => <></>)}
    </div>
}
