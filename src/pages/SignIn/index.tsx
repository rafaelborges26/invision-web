/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import GoogleLogin from 'react-google-login';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  Container,
  Slider,
  SliderImg,
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
import Input from '../../Components/Input';
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { signIn, user } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Este campo não pode ser vazio')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Este campo não pode ser vazio')
            .min(6, 'A senha não deve ter menos de 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (user.email === data.email) {
          alert('Você já está logado');
          return;
        }

        signIn({
          email: data.email,
          password: data.password,
        });
        alert('Logado com sucesso');
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  const onSuccess = (res: {}) => {
    console.log(res);
  };

  const onFailure = (res: {}) => {
    console.log('login error', res);
  };

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
          <Form onSubmit={handleSubmit} ref={formRef}>
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
          <GoogleLogin
            clientId="75299407960-qiaq4tnsna0k9c8lt0gbs1tlag825pba.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          />
        </ButtonLoginGoogle>

        <CreateAccount>
          <p>
            New
            <b> Invision? </b>
            <Link to="/signup">Create Account</Link>
          </p>
        </CreateAccount>
      </Content>
    </Container>
  );
};

export default SignIn;
