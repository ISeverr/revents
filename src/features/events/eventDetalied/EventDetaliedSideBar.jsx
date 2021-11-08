import { Segment, Item, } from 'semantic-ui-react';


const EventDetaliedSideBar = ({ attendees }) => {
    return (
        <>
            <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached="top"
                secondary
                inverted
                color="teal"
            >
                {attendees.length}  {attendees.length > 1 ? 'People' : 'Person'} going
            </Segment>
            <Segment attached>
                <Item.Group relaxed divided>
                    {attendees.map((attendee) => (
                        <Item key={attendee.id} style={{ position: 'relative' }}>
                            <Item.Image size="tiny" src={attendee.photoURL || '/assets/user.png'} />
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    <span>{attendee.displayName || 'Tom'}</span>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </>
    )
};


export default EventDetaliedSideBar;