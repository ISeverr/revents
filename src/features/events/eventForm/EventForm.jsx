import { useState } from 'react';
import { Segment, Header, Button, FormField, Label } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../EventActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MytextInput from '../../../App/common/form/MyTextInput';

const EventForm = ({ match, history }) => {

    const dispatch = useDispatch();

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));


    const initialValues = selectedEvent ?? {
        title: '',  
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('You must provide a title')
    });
    // const handleFormSubmit = () => {
    //     selectedEvent
    //         ? dispatch(updateEvent({ ...selectedEvent, ...values }))
    //         : dispatch(createEvent(
    //             {
    //                 ...values,
    //                 id: cuid(),
    //                 hostedBy: 'Bob',
    //                 attendees: [],
    //                 hostPhotoURL: '/assets/user.png',
    //             }));
    //     history.push('/events')
    // };

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Editing event' : 'Create new event'} />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                <Form className='ui form' >
                   <MytextInput name='title' placeholder='Event title' />
                    <FormField>
                        <Field name='category' placeholder='Category' />
                    </FormField>
                    <FormField>
                        <Field name='description' placeholder='Description' />
                    </FormField>
                    <FormField>
                        <Field name='city' placeholder='City' />
                    </FormField>
                    <FormField>
                        <Field name='venue' placeholder='Venue' />
                    </FormField>
                    <FormField>
                        <Field name='date' placeholder='Date' type='date' />
                    </FormField>
                    <Button type='submit' floated='right' positive content='Sunbmit' />
                    <Button type='submit' floated='right' content='Cancel'
                        as={Link} to='events' />
                </Form>
            </Formik>

        </Segment>
    )
};

export default EventForm;