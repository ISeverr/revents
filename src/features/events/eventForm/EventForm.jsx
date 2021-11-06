import { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

const EventForm = ({ setformOpen, createEvent }) => {
    const initialValues = {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };

    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = () => {
        createEvent(
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

    }

    return (
        <Segment clearing>
            <Header content='Create new event' />
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
                <Button type='submit' floated='right' positive content='Sunmit' />
                <Button type='submit' floated='right' content='Cancel' onClick={() => {
                    setformOpen(false);
                }} />
            </Form>
        </Segment>
    )
};

export default EventForm;