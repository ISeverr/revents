import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
const EventDashBoard = ( ) => {
    
const {events} = useSelector(state => state.event);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Events Filters</h2>
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;