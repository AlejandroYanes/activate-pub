import { NotificationType, showNotification, validateEntity } from 'activate-components';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import eventsApi from 'api/events';
import { Actions, EventInfo } from '../reducer';
import { eventRules } from '../rules';

export default function saveEvent(dispatch, event: EventInfo) {
  return () => {
    const { hasErrors, errors } = validateEntity(event, eventRules);

    if (hasErrors) {
      return dispatch({ type: Actions.SET_ERRORS, payload: errors });
    }

    dispatch({ type: Actions.START_LOADING });

    const onSuccess = () => {
      dispatch({ type: Actions.GO_NEXT_STEP });
      showNotification({
        type: NotificationType.SUCCESS,
        title: 'Event created',
        message: 'Your event was created, now you can add some content',
      })
    };

    const onError = (response: ApiErrorResponse) => {
      const { errorType, validationErrors, errorMessage } = response;

      if (errorType === ApiErrorType.VALIDATION) {
        dispatch({ type: Actions.SET_ERRORS, payload: validationErrors });
      } else {
        dispatch({ type: Actions.FINISH_LOADING });
        showNotification({
          type: NotificationType.ERROR,
          message: errorMessage,
        });
      }
    };

    const { category, ...rest } = event;
    const payload = { ...rest, category: category.id };

    return eventsApi.create(payload)
      .then(onSuccess)
      .catch(onError);
  };
}
