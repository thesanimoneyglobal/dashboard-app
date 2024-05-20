import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import Header from "../components/header/Header.tsx";
import {Box, ListItem, Typography} from "@mui/material";
import {useColors} from "../common/theme/hooks/useMode.ts";
import List from "@mui/material/List";
import {useState} from "react";
import {DateSelectArg, EventApi, EventClickArg, formatDate} from "fullcalendar";
import ListItemText from "@mui/material/ListItemText"; // a plugin!


function Calendar() {
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
    const colors = useColors()

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        const title = prompt('Please enter a new title for your event')
        const calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: Date.toString(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo: EventClickArg) => {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }


    return <>
        <Header title={'Calendar'} subtitle={'Schedule any event!'}/>
        <Box display={'flex'} justifyContent={'space-between'} mt={'2rem'}>
            <Box flex={'1 1 20%'} bgcolor={colors.primary[400]} borderRadius={'4px'} mr={'1rem'} p={2}>
                <Typography variant={'h4'}>Events</Typography>
                <List>
                    {currentEvents?.map((event) => (
                        <ListItem
                            key={event.id}
                            sx={{
                                backgroundColor: colors.greenAccent[500],
                                margin: "10px 0",
                                borderRadius: "2px",
                            }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>

                                        {event.start && formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box flex={'1 1 80%'}>
                <FullCalendar
                    editable={true}
                    selectable={true}
                    dayMaxEvents={true}
                    eventsSet={(events) => setCurrentEvents(events)}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    plugins={[dayGridPlugin, ]} initialView="dayGridMonth" weekends={false}
                    initialEvents={[
                        {
                            id: "12315",
                            title: "All-day event",
                            date: "2024-02-14",
                        },
                        {
                            id: "5123",
                            title: "Timed event",
                            date: "2024-02-28",
                        },
                    ]}
                />
            </Box>
        </Box>
    </>
}

export default Calendar;