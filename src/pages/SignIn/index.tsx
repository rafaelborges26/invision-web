/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
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
import Input from '../../Components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const getData = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Slider>
        <SliderImg>
          <SlideView />
        </SliderImg>
      </Slider>
      <Content>
        <HeaderContent>
          <Logo>Invision</Logo>
        </HeaderContent>
        <ContentLogin>
          <h1>Welcome to invision</h1>
          <Form onSubmit={getData} ref={formRef}>
            <ContentLoginForm>
              <p>Users name or Email</p>
              <Input name="email" type="text" />

              <p>Password</p>
              <Input name="password" type="password" />
            </ContentLoginForm>

            <span>Forgot Password?</span>
            <button type="submit">Sign in</button>
          </Form>
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
