import { useCallback, useReducer } from 'react';
import { useAtomicCall, useAtomicSet } from 'helpers';
import descriptionReducer, { Actions, EventFormState, EventInfo } from './reducer';
import saveEvent from './actions/saveEvent';

export * from './rules';

const initialState: EventFormState = {
  event: {} as EventInfo,
  errors: undefined,
  loading: false,
  step: 0,
};
export default function useEventFormState() {
  const [state, dispatch] = useReducer(descriptionReducer, initialState);

  return {
    state,
    actions: {
      goNextStep: useAtomicCall(dispatch, Actions.GO_NEXT_STEP),
      setEventInfo: useAtomicSet(dispatch, Actions.SET_EVENT_INFO),
      setErrors: useAtomicSet(dispatch, Actions.SET_ERRORS),
      saveEvent: useCallback(saveEvent(dispatch, state.event), [state.event]),
    },
  };
}
