import { AxiosPromise } from 'axios';
import { EventModel, SimpleEventDTO } from 'models/event';
import { del, get, patch, post } from './base';

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
  },
  create: (event: SimpleEventDTO): AxiosPromise<EventModel> => {
    return post('events/new', event);
  },
  update: (id: string, event: Partial<SimpleEventDTO>): AxiosPromise<EventModel> => {
    return patch(`events/${id}/edit`, event);
  },
  delete: (id: string): AxiosPromise => {
    return del(`events/${id}`);
  }
};

export default eventsApi;
