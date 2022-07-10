export interface CalendarEvent {
    id: number,
    start: string,
    duration: number,
    atRight?: CalendarEvent | null,
    atLeft?: CalendarEvent | null
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
