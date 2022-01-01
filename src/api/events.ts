import { AxiosPromise } from 'axios';
import { EventModel } from 'models/event';
import { get } from './base';

const eventsApi = {
  fetchMyEvents: (): AxiosPromise<EventModel[]> => {
    return get('events/by-me')
  },
  getDetails: (eventId: string): AxiosPromise<EventModel> => {
    return get(`events/${eventId}/details`);
  },
  listPublishedBy: (publisher: string): AxiosPromise<EventModel[]> => {
    return get(`events/publishedBy/${publisher}`);
  },
  listAttendedBy: (consumer: string): AxiosPromise<EventModel[]> => {
    return get(`events/attended-by/${consumer}`);
  },
  search: (search: string): AxiosPromise<EventModel[]> => {
    return get(`events/search/${search}`);
  },
  follow: (event: string): AxiosPromise => {
    return get(`events/${event}/follow`);
  },
  unfollow: (event: string): AxiosPromise => {
    return get(`events/${event}/unfollow`);
  }
};

export default eventsApi;
