import { Segment, Header, Form, Button } from 'semantic-ui-react';

const EventForm = ({ setformOpen }) => {
    return (
        <Segment clearing>
            <Header content='Create new event' />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue' />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' />
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