import { FC, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Stepper } from 'activate-components';
import categoriesApi from 'api/categories';
import { QueryKey } from 'components/providers/Query';
import useNewEventState from './state';
import Description from './steps/Description';

const NewEventPage: FC = () => {
  const queryClient = useQueryClient();
  const { activeStep, goNextStep } = useNewEventState();

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    queryClient.prefetchQuery(QueryKey.FETCH_CATEGORIES, categoriesApi.getTree);
  }, []);

  return (
    <Stepper activeStep={activeStep}>
      <Description goNextStep={goNextStep} />
    </Stepper>
  );
};

export default NewEventPage;
