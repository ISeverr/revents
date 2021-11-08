import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetaliedChat from './EventDetaliedChat';
import EventDetaliedHeader from './EventDetaliedHeader';
import EventDetaliedInfo from './EventDetaliedInfo';
import EventDetaliedSideBar from './EventDetaliedSideBar';


const EventDetaliedPage = ({match}) => {
    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetaliedHeader event={event} />
                <EventDetaliedInfo event={event} />
                <EventDetaliedChat />
            </Grid.Column>
            <Grid.Column width={6} >
                <EventDetaliedSideBar attendees={event.attendees}/>
            </Grid.Column>
        </Grid>
    )
}

export default EventDetaliedPage;