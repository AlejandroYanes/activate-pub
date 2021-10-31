import React, { FunctionComponent } from 'react';
import {
  Button,
  Field,
  Form,
  IconButton,
  Layout,
  LinkButton,
  PasswordInput,
  RenderIf,
  RenderInLayout,
  Text,
  Title,
} from 'activate-components';
import useSignPageState, { validationRules } from './state';
import { Content, OAuthBox, SignBox } from './styled';
import { MultitaskCEO } from '../../illustations';

const emptyAction = () => undefined;

const SignPage: FunctionComponent = () => {
  const {
    state: {
      credentials,
      callingApi,
      errors,
    },
    actions: {
      setCredentials,
      setErrors,
      authenticate,
      signInWithGoogle,
      signInWithFacebook,
    },
  } = useSignPageState();

  return (
    <Content>
      <RenderInLayout ifNot layout={Layout.MOBILE}>
        <MultitaskCEO height={500} color="ACCENT" />
      </RenderInLayout>
      <SignBox>
        <Title
          level={1}
          color="brand"
          align="center"
          mB
        >
          Sign In to start working
        </Title>
        <Form
          state={credentials}
          onChange={setCredentials}
          errors={errors}
          onError={setErrors}
          rules={validationRules}
        >
          <Field name="email" label="Email" />
          <Field
            name="password"
            label="Password"
            component={PasswordInput}
          />
          <RenderIf condition={!!errors.signError}>
            <Text color="error" padding="8px 0 8px 20px">
              {errors.signError}
            </Text>
          </RenderIf>
          <Button
            label="Sign In"
            variant="fill"
            color="brand"
            loading={callingApi}
            onClick={authenticate}
          />
        </Form>
        <OAuthBox>
          <Text color="secondary">
            Or use your social media
          </Text>
          <div>
            <IconButton
              onClick={signInWithGoogle}
              icon="GOOGLE"
              color="accent"
              variant="fill"
              size="large"
            />
            <IconButton
              onClick={signInWithFacebook}
              icon="FACEBOOK"
              color="accent"
              variant="fill"
              size="large"
            />
            <IconButton
              onClick={emptyAction}
              icon="INSTAGRAM"
              color="accent"
              variant="fill"
              size="large"
            />
          </div>
        </OAuthBox>
        <LinkButton
          to="/forgot_password"
          label="Forgot password?"
          margin="24px auto 0"
        />
      </SignBox>
    </Content>
  );
};

export default SignPage;
