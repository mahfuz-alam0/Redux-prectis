import React from 'react';

const LongForm = () => {

    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        education: '',
        quantity: 0,
        feadback: '',
        term: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case 'TOGGLE':
                return {
                    ...state,
                    term: !state.term
                }
            case 'INCREMENT':
                return {
                    ...state,
                    quantity: state.quantity + 1
                }
            case 'DECREMENT':
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default:
                return state;
        }

    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const submit = (event) => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <div className='...'>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        type="text"
                        name='firstname'
                        id='firstname'
                        onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name='lastname'
                        onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={state.gender === "male"}
                            onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                        />
                        Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={state.gender === "female"}
                            onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                        />
                        Female
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={state.gender === "other"}
                            onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                        />
                        Other
                    </label>
                </div>
                <div>
                    <label htmlFor="feadback">Feadback</label>
                    <textarea name="feadback" id="" cols="30" rows="10"
                        onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <label htmlFor="">Education</label>
                    <select name="education" id="select" onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}>
                        <option disabled>select One</option>
                        <option value="Bsc">BSC</option>
                        <option value="HSC">HSC</option>
                        <option value="SSC">SSC</option>
                        <option value="JSC">JSC</option>
                    </select>
                </div>
                <div>
                    <button onClick={(e) => dispatch({ type: 'INCREMENT'})}>Increment</button>
                    <span>{state.quantity}</span>
                    <button onClick={(e) => dispatch({ type: 'DECREMENT'})}>Decrement</button>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name='chackbox'
                        onClick={() => dispatch({ type: 'TOGGLE' })}
                    />
                </div>
                <input disabled={!state.term} type="submit" value='submit' />
            </form>
        </div>
    );
};

export default LongForm;