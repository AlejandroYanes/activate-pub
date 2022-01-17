import { commonRules, isValidWebSite } from 'activate-components';
import { EventInfo } from './reducer';

const { required } = commonRules;

const validateUrl = (address: string, event: EventInfo) => {
  const { isOnline } = event;
  return isOnline && !!address && !isValidWebSite(address)
    ? 'This is not a valid url'
    : undefined;
};

export const eventRules = {
  name: [required],
  date: [required],
  address: [required, validateUrl],
  category: [required],
};
