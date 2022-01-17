import { FC, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Stepper } from 'activate-components';
import categoriesApi from 'api/categories';
import { QueryKey } from 'components/providers/Query';
import Description from './steps/Description';
import useEventFormState from './state';

const NewEventPage: FC = () => {
  const queryClient = useQueryClient();
  const {
    state: {
      step,
      event,
      errors,
      loading,
    },
    actions: {
      goNextStep,
      setEventInfo,
      setErrors,
    },
  } = useEventFormState();

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    queryClient.prefetchQuery(QueryKey.FETCH_CATEGORIES, categoriesApi.getTree);
  }, []);

  return (
    <Stepper activeStep={step}>
      <Description
        goNextStep={goNextStep}
        setEventInfo={setEventInfo}
        setErrors={setErrors}
      />
    </Stepper>
  );
};

export default NewEventPage;
