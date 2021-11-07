import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../App/api/sampleData';
import { useState } from 'react';
const EventDashBoard = ( ) => {
    const [events, setEvents] = useState(sampleData);

    // const handleCreateEvent = (event) => {
    //     setEvents([...events, event]);
    // };

    // const handleUpdateEvent = (updateEvent) => {
    //     setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
    // };

    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter(evt => evt.id !== eventId));
    }


    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    deleteEvent={handleDeleteEvent}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Events Filters</h2>
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;