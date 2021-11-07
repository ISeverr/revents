import { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';

const EventForm = ({ setformOpen, createEvent, selectedEvent, updateEvent }) => {
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };

    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = () => {
        selectedEvent
            ? updateEvent({ ...selectedEvent, ...values })
            : createEvent(
                {
                    ...values,
                    id: cuid(),
                    hostedBy: 'Bob',
                    attendees: [],
                    hostPhotoURL: '/assets/user.png',
                });
        setformOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Editing event' : 'Create new event'} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Event title'
                        value={values.title}
                        name='title'
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Category'
                        value={values.category}
                        name='category'
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Description'
                        value={values.description}
                        name='description'
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='City'
                        value={values.city}
                        name='city'
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Venue'
                        value={values.venue}
                        name='venue'
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='date'
                        placeholder='Date'
                        value={values.date}
                        name='date'
                        onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Sunbmit' />
                <Button type='submit' floated='right' content='Cancel' 
                    as={Link} to='events' />
            </Form>
        </Segment>
    )
};

export default EventForm;