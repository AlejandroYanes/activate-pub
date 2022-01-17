import { FC } from 'react';
import {
  Button,
  Checkbox,
  DateTimePicker,
  Field,
  FlexBox,
  Form,
  RenderIf,
} from 'activate-components';
import StepTitle from '../StepTitle';
import useDescriptionState, { eventRules } from '../../state';

interface Props {
  goNextStep: () => void;
}

const Description: FC<Props> = (props) => {
  const { goNextStep } = props;
  const {
    state: {
      data,
      errors,
    },
    actions: {
      setData,
      setErrors,
    },
  } = useDescriptionState();

  return (
    <FlexBox direction="column" align="stretch" width={480} margin="0 auto 48px">
      <StepTitle>Description</StepTitle>
      <Form state={data} onChange={setData} errors={errors} onError={setErrors} rules={eventRules}>
        <Field name="name" label="Name" />
        <RenderIf
          condition={data.isRanged}
          fallback={
            <Field
              name="startDate"
              label="Date"
              component={DateTimePicker}
              type="date-time"
            />
          }
        >
          <Field
            name="date"
            label="Start Date"
            component={DateTimePicker}
            type="date-time"
          />
          <Field
            name="endDate"
            label="End Date"
            component={DateTimePicker}
            type="date-time"
          />
        </RenderIf>
        <Field
          name="isRanged"
          label="Spams multiple days"
          component={Checkbox}
          margin="0 0 32px 20px"
        />
        <Field name="address" label={data.isOnline ? 'Link' : 'Address'} />
        <Field
          name="isOnline"
          label="Is Online"
          component={Checkbox}
          margin="0 0 32px 20px"
        />
        <RenderIf condition={!data.isOnline}>
          <Field
            name="useSameAddress"
            label="Use your own address"
            component={Checkbox}
            margin="0 0 32px 20px"
          />
        </RenderIf>
      </Form>
      <FlexBox justify="flex-end">
        <Button
          onClick={() => undefined}
          variant="fill"
          color="brand"
          label="Next"
          padding="0 20px"
        />
      </FlexBox>
    </FlexBox>
  );
};

export default Description;
