import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';


const SandBox = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.counter)

    return (
        <>
            <h1>123</h1>
            <h3>The data is: {data}</h3>
            <Button
                content='Increment' color='green'
                onClick={() => dispatch(increment(20))}
                    />
                    <Button
                        content='Decrement' color='red'
                        onClick={() => dispatch(decrement(20))}
                    />
        </>
    )
}

export default SandBox;