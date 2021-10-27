import { FunctionComponent } from 'react';
import {
  FlexBox,
  LinkButton,
  Paragraph,
  Title,
} from 'activate-components';
import {
  ManWithChart,
  TeamSuccess,
  WomanWithMegaphone,
} from 'components/illustations';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <FlexBox data-el="promote" align="center" width={1200} margin="0 auto 48px">
        <FlexBox direction="column" align="flex-start" padding="24px 76px 0 0">
          <Title
            level={1}
            color="brand"
            weight="bold"
            size={80}
            mB
          >
            Promote your events
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.
          </Paragraph>
          <LinkButton
            to="/sign"
            label="Get Started"
            variant="fill"
            color="brand"
            padding="18px 24px"
            mT
          />
        </FlexBox>
        <WomanWithMegaphone width={500} color="BRAND" />
      </FlexBox>
      <FlexBox data-el="team" align="center" width={1200} margin="0 auto 48px">
        <TeamSuccess width={500} color="ACCENT" />
        <FlexBox direction="column" align="flex-start" padding="24px 0 0 76px">
          <Title
            level={1}
            color="accent"
            weight="bold"
            size={80}
            mB
          >
            Build your team
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.
          </Paragraph>
          <LinkButton
            to="/sign"
            label="Get Started"
            variant="fill"
            color="accent"
            padding="18px 24px"
            mT
          />
        </FlexBox>
      </FlexBox>
      <FlexBox data-el="stats" align="center" width={1200} margin="0 auto 48px">
        <FlexBox direction="column" align="flex-start" padding="0 76px 0 0">
          <Title
            level={1}
            color="brand"
            weight="bold"
            size={80}
            mB
          >
            See how you perform
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.
          </Paragraph>
          <LinkButton
            to="/sign"
            label="Get Started"
            variant="fill"
            color="brand"
            padding="18px 24px"
            mT
          />
        </FlexBox>
        <ManWithChart width={500} color="BRAND" />
      </FlexBox>
    </>
  );
};

export default LandingPage;
