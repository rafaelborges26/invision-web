import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Slider,
  SliderImg,
  SliderTexts,
  Content,
  HeaderContent,
  Logo,
  ContentLogin,
  ContentLoginForm,
  ContentOR,
  ButtonLoginGoogle,
  CreateAccount,
} from './styles';

import SlideView from '../../Components/SlideView';
import LogoGoogle from '../../assets/Google__G__Logo.svg';
import imgSlider from '../../assets/Data.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Slider>
        <SliderImg>
          <SlideView />
        </SliderImg>

        <SliderTexts>
          <h2>Marcenas mattis egestas</h2>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </SliderTexts>
      </Slider>

      <Content>
        <HeaderContent>
          <Logo>Invision</Logo>
        </HeaderContent>
        <ContentLogin>
          <h1>Welcome to invision</h1>
          <ContentLoginForm>
            <p>Users name or Email</p>
            <input name="email" type="text" />

            <p>Password</p>
            <input name="password" type="text" />
          </ContentLoginForm>

          <span>Forgot Password?</span>
          <button type="submit">Sign in</button>
        </ContentLogin>
        <ContentOR>
          <hr />
          <p>Or</p>
          <hr />
        </ContentOR>
        <ButtonLoginGoogle>
          <button name="buttonGoogle" type="submit">
            <img src={LogoGoogle} alt="Login with Google" />
            <span>Sign in with Google</span>
          </button>
        </ButtonLoginGoogle>

        <CreateAccount>
          <p>
            New
            <b> Invision? </b>
            <Link to="/">Create Account</Link>
          </p>
        </CreateAccount>
      </Content>
    </Container>
  );
};

export default SignIn;
