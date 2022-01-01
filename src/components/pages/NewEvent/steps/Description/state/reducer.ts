export enum Actions {
  SET_DATA = 'SET_DATA',
  SET_ERRORS = 'SET_ERRORS',
  START_UPDATE = 'START_UPDATE',
  FINISH_UPDATE = 'FINISH_UPDATE',
}

export interface EventInfo {
  name: string;
  startDate: Date;
  endDate?: Date;
  isRanged: boolean;
  isOnline: boolean;
  link?: string;
  address?: string;
  useSameAddress?: boolean;
}

interface State {
  data: EventInfo;
  errors: any;
  updating: boolean;
}

export default function descriptionReducer(state: State, action): State {
  const { type, payload } = action;

  switch (type as Actions) {
    case Actions.SET_DATA:
      return { ...state, data: payload };
    case Actions.SET_ERRORS:
      return { ...state, errors: payload, updating: false };
    case Actions.START_UPDATE:
      return { ...state, updating: true };
    case Actions.FINISH_UPDATE:
      return { ...state, updating: false };
    default:
      return state;
  }
}
