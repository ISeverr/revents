import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { deleteEvent } from '../EventActions';

const EventListItem = ({ event }) => {
    const dispatch = useDispatch();

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary >
                <List horizontal >
                    {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id} />
                    ))}
                </List>
            </Segment>
            <Segment clearing >
                <div>{event.description}</div>
                <Button
                    color='teal'
                    floated='right'
                    content='view'
                    as={Link} to={`/events/${event.id}`}
                    />
                <Button
                    color='red'
                    floated='right'
                    content='delete'
                    onClick={() => dispatch(deleteEvent(event.id))} />

            </Segment>
        </Segment.Group>
    )
}

export default EventListItem;