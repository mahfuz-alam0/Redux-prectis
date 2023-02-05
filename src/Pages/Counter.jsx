import React from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment', payload: 5})}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 5})}>
                Decrement
            </button>
        </>
    );
}

export default Counter;