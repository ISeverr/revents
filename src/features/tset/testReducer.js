const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(amount) {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}

const initialState = {
    counter: 42,
}

const testReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + payload,
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - payload,
            }
        default: ;
            return state;
    }
}

export default testReducer;