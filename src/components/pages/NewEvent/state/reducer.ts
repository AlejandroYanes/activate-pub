import { CategoryModel } from 'models/category';

export enum Actions {
  GO_NEXT_STEP= 'GO_NEXT_STEP',
  SET_EVENT_INFO = 'SET_EVENT_INFO',
  SET_ERRORS = 'SET_ERRORS',
  START_LOADING = 'START_LOADING',
  FINISH_LOADING = 'FINISH_LOADING',
}

export interface EventInfo {
  name: string;
  date: Date;
  endDate?: Date;
  isRanged: boolean;
  isOnline: boolean;
  address: string;
  useSameAddress?: boolean;
  category: CategoryModel;
}

export interface EventFormState {
  step: number;
  event: EventInfo;
  errors: any;
  loading: boolean;
}

export default function descriptionReducer(state: EventFormState, action): EventFormState {
  const { type, payload } = action;

  switch (type as Actions) {
    case Actions.GO_NEXT_STEP:
      return { ...state, step: state.step + 1 };
    case Actions.SET_EVENT_INFO:
      return { ...state, event: payload };
    case Actions.SET_ERRORS:
      return { ...state, errors: payload, loading: false };
    case Actions.START_LOADING:
      return { ...state, loading: true };
    case Actions.FINISH_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}
