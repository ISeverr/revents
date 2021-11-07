import { Grid } from 'semantic-ui-react';
import EventDetaliedChat from './EventDetaliedChat';
import EventDetaliedHeader from './EventDetaliedHeader';
import EventDetaliedInfo from './EventDetaliedInfo';
import EventDetaliedSideBar from './EventDetaliedSideBar';


const EventDetaliedPage = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetaliedHeader />
                <EventDetaliedInfo />
                <EventDetaliedChat />
            </Grid.Column>
            <Grid.Column width={6} >
                <EventDetaliedSideBar />
            </Grid.Column>
        </Grid>
    )
}

export default EventDetaliedPage;