import { useReducer } from 'react';
import { useAtomicSet } from 'helpers';
import descriptionReducer, { Actions, EventInfo } from './reducer';

export default function useDescriptionState() {
  const [state, dispatch] = useReducer(
    descriptionReducer,
    { data: {} as EventInfo, errors: undefined, updating: false },
  );

  return {
    state,
    actions: {
      setData: useAtomicSet(dispatch, Actions.SET_DATA),
      setErrors: useAtomicSet(dispatch, Actions.SET_ERRORS),
    },
  };
}
