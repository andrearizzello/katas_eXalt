import {EventProps} from "../interfaces";
import {totalInterval} from "../utils";

const {DateTime} = require("luxon");
/**
 * divEventStyle generates the style for the event.
 * It calculates the box size based on the total grid size, each grid beam corresponds to 1 minute.
 * Overlapping events, having the same grid row number, will automatically be placed in the next column,
 * so we take full advantage of the capabilities of the Grid system
 * @param {string} start - The starting time of the event
 * @param {number} duration - The duration of the event
 * @param {string} calendarStartString - The start time of the calendar
 * @param {string} calendarEndTimeString - The end time of the calendar
 */
const divEventStyle = (start: string, duration: number, calendarStartString: string, calendarEndTimeString: string) => {
    let maximumMinuteTime = totalInterval(calendarStartString, calendarEndTimeString).length("minutes")

    let [calendarStartHour, calendarStartMinute] = calendarStartString.split(":")
    let startCalendarTime = DateTime.fromObject({hour: calendarStartHour, minute: calendarStartMinute})

    let [startEventHour, startEventMinute] = start.split(":")
    let startEventTime = DateTime.fromObject({hour: startEventHour, minute: startEventMinute})

    let startGridRow = startEventTime.diff(startCalendarTime, 'minutes').toObject()

    return {
        backgroundColor: "#F57F17",
        border: "1px solid black",
        gridRowStart: `${startGridRow.minutes || 1}`,
        gridRowEnd: `${Math.min(maximumMinuteTime, (startGridRow.minutes || 1) + duration)}`,
    }
}

export const Event = ({event, startCalendarString, endCalendarString}: EventProps) => {
    return (
        <div style={divEventStyle(event.start, event.duration, startCalendarString, endCalendarString)}>
            <p style={{textAlign: "center"}}>{event.id}</p>
        </div>
    )
}
