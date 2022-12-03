import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from '../../redux';
import { Formik, Field } from 'formik';
import { useKeyLock } from 'hooks';
import { validationSchema } from 'validationSchema';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import { MailFilled, LockFilled, UserOutlined } from '@ant-design/icons';
import {
  FormWrapper,
  LogoWrapper,
  PrimaryButton,
  StyledForm,
  StyledLink,
  InputWrapper,
  StyledInput,
  StyledInputPassword,
  WarningText,
  GoogleLink,
} from './AuthForm.styled';
import { FormError } from './FormError';
import { PasswordStrengthChecker } from './PasswordstrengthChecker.jsx';
import { AppLogo } from 'components/Logo/Logo';
import { ReactComponent as GoogleLogo } from '../img/google.svg';

export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const capsLock = useKeyLock('CapsLock');
  const { t } = useTranslation();

  const googleAuthRedirect = 'https://ewallet-api.onrender.com/api/auth/google';

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = ({ email, password, username }, { resetForm }) => {
    type === 'register'
      ? dispatch(registerUser({ email, password, username }))
      : dispatch(logInUser({ email, password }));

    resetForm();
  };

  return (
    <FormWrapper>
      <LogoWrapper>
        <AppLogo />
      </LogoWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(type)}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, dirty, touched, errors }) => (
          <StyledForm noValidate>
            {capsLock && <WarningText>Caps Lock enabled!</WarningText>}
            <InputWrapper>
              <Field type="email" name="email">
                {({ field, form: { isSubmitting } }) => (
                  <StyledInput
                    {...field}
                    disabled={isSubmitting}
                    placeholder={t('placeholder.placeholderEmail')}
                    bordered={false}
                    prefix={<MailFilled />}
                  />
                )}
              </Field>
              {touched.email && errors.email && <FormError name="email" />}
            </InputWrapper>
            <InputWrapper>
              <Field name="password" type="password">
                {({ field, form: { isSubmitting } }) => (
                  <StyledInputPassword
                    {...field}
                    disabled={isSubmitting}
                    placeholder={t('placeholder.placeholderPassword')}
                    bordered={false}
                    prefix={<LockFilled />}
                  />
                )}
              </Field>
              {touched.password && errors.password && (
                <FormError name="password" />
              )}
            </InputWrapper>
            {type === 'register' && (
              <>
                <InputWrapper>
                  <Field name="confirmPassword" type="password">
                    {({ field, form: { isSubmitting } }) => (
                      <StyledInputPassword
                        {...field}
                        disabled={isSubmitting}
                        placeholder={t(
                          'placeholder.placeholderconfirmPassword'
                        )}
                        bordered={false}
                        prefix={<LockFilled />}
                      />
                    )}
                  </Field>
                  <PasswordStrengthChecker password={values.password} />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <FormError name="confirmPassword" />
                  )}
                </InputWrapper>
                <InputWrapper>
                  <Field type="username" name="username">
                    {({ field, form: { isSubmitting } }) => (
                      <StyledInput
                        {...field}
                        disabled={isSubmitting}
                        placeholder={t('placeholder.placeholderName')}
                        bordered={false}
                        prefix={<UserOutlined />}
                      />
                    )}
                  </Field>
                  {touched.username && errors.username && (
                    <FormError name="username" />
                  )}
                </InputWrapper>
              </>
            )}
            {type === 'register' ? (
              <>
                <PrimaryButton type="submit" disabled={!isValid || !dirty}>
                  {t('buttonAuth.buttonReg')}
                </PrimaryButton>
                <StyledLink to="/login">
                  {t('buttonAuth.buttonLogIn')}
                </StyledLink>
                <GoogleLink href={googleAuthRedirect} rel="noreferrer">
                  <GoogleLogo
                    style={{ height: '1.2em', marginRight: '10px' }}
                  />
                  {t('buttonAuth.buttonGoogle')}
                </GoogleLink>
              </>
            ) : (
              <>
                <PrimaryButton disabled={!isValid || !dirty} type="submit">
                  {t('buttonAuth.buttonLogIn')}
                </PrimaryButton>
                <StyledLink to="/signup">
                  {t('buttonAuth.buttonReg')}
                </StyledLink>
                <GoogleLink href={googleAuthRedirect} rel="noreferrer">
                  <GoogleLogo
                    style={{ height: '1.2em', marginRight: '10px' }}
                  />
                  {t('buttonAuth.buttonGoogle')}
                </GoogleLink>
              </>
            )}
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
};
