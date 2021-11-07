import './styles.css';
import EventDashBoard from '../../features/events/eventDashBoard/eventDashBoard';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/events/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetalied/EventDetaliedPage';
import { Container } from 'semantic-ui-react';
import EventForm from '../../features/events/eventForm/EventForm';
import { Route, Switch } from 'react-router';
import { BrowserRouter, } from 'react-router-dom';




function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Switch>
              <Route exact path='/events' render={() => <EventDashBoard />} />
              <Route path='/events/:id' render={() => <EventDetailedPage />} />
              <Route path={['/createEvent', 'manage/:id']} component={() => <EventForm />} />
          </Switch>
          </Container>
        </>
      )} />
    </BrowserRouter>
  );
}

export default App;
