import { FC } from 'react';
import { SvgIcon, Title } from 'activate-components';
import { AddTile } from './styled';

interface Props {
  onClick: () => void;
}

const AddEventTile: FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <AddTile onClick={onClick}>
      <SvgIcon icon="ADD_BOOKMARK" color="BRAND_FONT" size="x-large" />
      <Title color="brand" level={2} mT>Add a new event</Title>
    </AddTile>
  );
};

export default AddEventTile;
