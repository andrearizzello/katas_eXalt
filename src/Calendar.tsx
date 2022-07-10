import {CalendarEvent, CalendarProps} from "./interfaces";
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

const touches = (firstEvent: CalendarEvent, eventsSortedCopy: CalendarEvent[], eventsSorted: CalendarEvent[]): any => {
    let results = null
    let currentEventDate = dateEventGetter(firstEvent)
    for (let i = 1; i < eventsSortedCopy.length; i++) {
        let nextEventDate = dateEventGetter(eventsSortedCopy[i])
        if ((currentEventDate.startTime < nextEventDate.endTime) && (nextEventDate.startTime < currentEventDate.endTime)) {
            //find the biggest event to put on the left
            let indexOriginalEvents = eventsSorted.findIndex(el => el.id === firstEvent.id)
            if ((currentEventDate.endTime - currentEventDate.startTime) > (nextEventDate.endTime - nextEventDate.startTime)) {
                eventsSorted[indexOriginalEvents].atRight = eventsSortedCopy[i]
                eventsSortedCopy[i].atLeft = eventsSorted[indexOriginalEvents]
            } else {
                eventsSorted[indexOriginalEvents].atLeft = eventsSortedCopy[i]
                eventsSortedCopy[i].atRight = eventsSorted[indexOriginalEvents]
            }
            let copyEvents = [...eventsSortedCopy]
            let newFirstEvent = copyEvents.splice(i, 1)[0]
            results = touches(newFirstEvent, copyEvents, eventsSorted)
        }
    }
    return results
}

/**
 * Calendar is the main component that contains all the events.
 * It sorts the events by time, and it creates and Event component for each of them
 * @param {CalendarProps}
 */
export const Calendar = ({events, startTime, endTime}: CalendarProps) => {
    let columns = 1
    let eventsSorted = events.sort(dateSorter)
    let eventSortedCopy = [...events]
    while (eventsSorted.length) {
        let first = eventSortedCopy.shift()
        if (first)
            touches(first, eventSortedCopy, eventsSorted)
    }

    // const final = eventSorted.map((el , index, array) => touches(el, array, 0))

    return (
        <div style={divCalendar(startTime, endTime)}>
            {/*{eventsSorted.map((event, index) =>*/}
            {/*    <Event event={event}*/}
            {/*           startCalendarString={startTime}*/}
            {/*           endCalendarString={endTime}*/}
            {/*           key={index}/>*/}
            {/*)}*/}
        </div>
    )
}
