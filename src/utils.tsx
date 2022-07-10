import {CalendarEvent} from "./Container/Calendar";

const {DateTime, Interval} = require("luxon");

/**
 * totalInterval calculates the total number of "lines" to show according to the total duration of the calendar
 * @param {string} startTime - The starting time of the calendar
 * @param {string} endTime - The ending time of the calendar
 */
export const totalInterval = (startTime: string, endTime: string) => {
    let [startHour, startMin] = startTime.split(":")
    let [endHour, endMin] = endTime.split(":")

    let start = DateTime.fromObject({hour: startHour, minute: startMin})
    let end = DateTime.fromObject({hour: endHour, minute: endMin})
    return Interval.fromDateTimes(start, end)
}

/**
 * dateSorter sorts two dates
 * @param a - a DateTime object
 * @param b - a DateTime object
 * @return {number} the difference between the dates
 */
export const dateSorter = (a: any, b: any) => {
    let [startHourA, startMinA] = a.start.split(":")
    let [startHourB, startMinB] = b.start.split(":")

    let startTime = DateTime.fromObject({hour: startHourA, minute: startMinA})
    let endTime = DateTime.fromObject({hour: startHourB, minute: startMinB})
    return startTime.toMillis() - endTime.toMillis()
}

/**
 * getRandomInInterval returns a number in a specified interval
 * @param {number} min
 * @param {number} max
 * @return {number} The random number
 */
export const getRandomInInterval = (min: number, max: number) => (Math.random() * (max - min) + min) | 0;

export const dateEventGetter = (calendarEvent: CalendarEvent) => {
    const [startHour, startMinute] = calendarEvent.start.split(":")
    return {
        startTime: DateTime.fromObject({hour: startHour, minute: startMinute}),
        endTime: DateTime.plus({minutes: calendarEvent.duration})
    }
}

export const eventGroupCreator = (events: CalendarEvent[]) => {
    let eventGroups = []
    // const group = (calendarEvent: CalendarEvent, listCalendarEvent: CalendarEvent[], group?: CalendarEvent[]) => {
    //
    // }
    for (let i = 0; i < events.length; i++) {
        let currentEventDate = dateEventGetter(events[i])
        let group = []
        for (let j = i + 1; j < events.length; j++) {
            let nextEventDate = dateEventGetter(events[j])
            if ((currentEventDate.startTime <= nextEventDate.endTime) && (nextEventDate.startTime <= currentEventDate.endTime)) {
                //Then the two dates overlaps
                
            }
        }
        // eventGroups.push()
    }

    return []
}
