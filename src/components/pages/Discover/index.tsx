import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { Page, Title } from 'activate-components';
import eventsApi from 'api/events';
import { EventChannel, useEventCenterUpdates } from 'event-center';
import { QueryKey } from 'components/providers/Query';
import EventsGrid from 'components/experience/EventsGrid';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import { AddEventTile } from 'components/experience/EventTile';
import Changers from './Changers';

const channels: EventChannel[] = ['EVENT_FOLLOWED', 'EVENT_UNFOLLOWED'];

const DiscoverPage: FunctionComponent = () => {
  const { push } = useHistory();
  const {
    isLoading,
    data: response,
    error,
    refetch,
  } = useQuery(QueryKey.FETCH_MY_EVENTS, () => eventsApi.fetchMyEvents());
  useEventCenterUpdates(channels, refetch);

  if (isLoading) {
    return (
      <Page>
        <LoadingScreen />
      </Page>
    );
  }

  if (!!error) {
    return (
      <Page>
        <NoConnectionScreen
          message="We couldn't load new events for you."
        />
      </Page>
    );
  }

  const events = response?.data || []
  const items = [
    <AddEventTile key="add-event" onClick={() => push('/app/event/new')} />,
    ...events,
  ];

  return (
    <Page>
      <Title
        color="brand"
        weight="bold"
        align="center"
        level={1}
        size={80}
        lineHeight={80}
        mB
      >
        My Events
      </Title>
      <Changers />
      <EventsGrid events={items} />
    </Page>
  );
};

export default DiscoverPage;
