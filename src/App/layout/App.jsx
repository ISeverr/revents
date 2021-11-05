import './styles.css';
import EventDashBoard from '../../features/events/eventDashBoard/eventDashBoard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';


function App() {
  const [formOpen, setformOpen] = useState(false);

  return (
    <>
      <NavBar setformOpen={setformOpen} />
      <Container className='main'>
        <EventDashBoard formOpen={formOpen} setformOpen={setformOpen} />
      </Container>
    </>
  );
}

export default App;
