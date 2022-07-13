import {CalendarProps} from "./interfaces";
import {Event} from "./Components/Event";
import {dateEventGetter, dateSorter, totalInterval} from "./utils";

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

/**
 * Calendar is the main component that contains all the events.
 * It sorts the events by time, and it creates and Event component for each of them
 * @param {CalendarProps}
 */
export const Calendar = ({events, startTime, endTime}: CalendarProps) => {
    let eventsCopy = [...events]
    let event
    let eventDate
    for (let i = 0; i < eventsCopy.length; i++) {
        event = eventsCopy[i]
        eventDate = dateEventGetter(event)
        for (let j = 1; j < eventsCopy.length; j++) {

        }
    }

    return (
        <div style={divCalendar(startTime, endTime)}>
            {events.sort(dateSorter).map((event, index) =>
                <Event event={event}
                       startCalendarString={startTime}
                       endCalendarString={endTime}
                       key={index}/>
            )}
        </div>
    )
}
