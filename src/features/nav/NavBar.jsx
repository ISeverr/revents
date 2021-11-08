import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedMenu from './SignedMenu';
import SignedOutMenu from './SignedOutMenu';
import { useState,  } from 'react';
import { useHistory } from 'react-router';

const NavBar = ({ setformOpen }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const history = useHistory();

    const handleSigndOut = () => {
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
                <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
                {authenticated && <Menu.Item as={NavLink} to='/createEvent'>
                    <Button
                        positive inverted content='Create Event'
                    />
                </Menu.Item>}
                {authenticated
                    ? <SignedMenu signOut={handleSigndOut} />
                    : <SignedOutMenu setAuthenticated={setAuthenticated} />}
            </Container>
        </Menu>

    )
};

export default NavBar;
