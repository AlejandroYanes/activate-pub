import { FC } from 'react';
import { Layout, Title, useAppLayout } from 'activate-components';

const sizeMap = {
  [Layout.DESKTOP]: 40,
  [Layout.TABLET]: 48,
  [Layout.MOBILE]: 32,
};

const StepTitle: FC = (props) => {
  const { children } = props;
  const layout = useAppLayout();

  return (
    <Title
      padding="0"
      margin="0 0 24px 0"
      weight="bold"
      size={sizeMap[layout]}
    >
      {children}
    </Title>
  );
};

export default StepTitle;
