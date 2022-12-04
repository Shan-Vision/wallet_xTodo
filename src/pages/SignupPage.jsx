import { Helmet } from 'react-helmet';
import { AuthForm } from 'components/AuthForm';
import {
  Container,
  AuthFormContainer,
  AuthPageTitleGroup,
  AuthPageImg,
  AuthPageTitle,
} from './AuthPage.style';
import registerPageImg from '../components/img/registerPageImg.svg';
import LanguageFlags from 'components/Localisation/LanguageFlags';

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Container>
        <AuthPageTitleGroup>
          <AuthPageImg src={registerPageImg} alt="Logo page image" />
          <AuthPageTitle>Finance App</AuthPageTitle>
        </AuthPageTitleGroup>
        <AuthFormContainer>
          <LanguageFlags />
          <AuthForm type={'register'} />
        </AuthFormContainer>
      </Container>
    </>
  );
};

export default SignupPage;
