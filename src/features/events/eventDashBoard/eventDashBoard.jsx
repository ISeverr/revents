import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../App/api/sampleData';
import { useState } from 'react';
const EventDashBoard = ({ formOpen, setformOpen }) => {
    const [events, setEvents] = useState(sampleData);

    const handleCreateEvent = (event) => {
        setEvents([...events, event]);
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                    <EventForm
                        setformOpen={setformOpen}
                        setEvents={setEvents}
                        createEvent={handleCreateEvent}
                    />}
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;