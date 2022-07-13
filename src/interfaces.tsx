export interface CalendarEvent {
    id: number,
    start: string,
    duration: number
    hasLeft?: CalendarEvent | undefined
    hasRight?: CalendarEvent | undefined
}

export interface CalendarProps {
    events: CalendarEvent[]
    startTime: string,
    endTime: string
}

export interface EventProps {
    event: CalendarEvent
    startCalendarString: string
    endCalendarString: string
}
