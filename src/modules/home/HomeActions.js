import { push } from 'connected-react-router';

export const HOME_ACTION_TYPES = {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION',
};


const exampleActionCreator = (param) => ({
    type: HOME_ACTION_TYPES.EXAMPLE_ACTION,
    payload: param,
});

export const exampleAction = param => dispatch => {
    dispatch(exampleActionCreator(param));
};

export const redirectExample = () => dispatch => {
    dispatch(push('/another'))
};