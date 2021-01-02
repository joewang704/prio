import React from 'react';
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled';
import Cookies from 'js-cookie'

import { Spacer } from '../utils/layout';
import { useLogin } from '../../hooks/auth';

const Container = styled.div`
`;

const Login = () => {
  const [login] = useLogin();

  const onSubmit = (input) => {
    login({ variables: { input }}).then(({ data }) => {
      const { errors, token } = data.login;
      if (errors && errors.length) {
        return;
      }
      Cookies.set('user', token, { expires: 365 });
      location.reload();
    });
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={onSubmit} autoComplete="off">
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" id="email" render={({ input, meta }) => (
              <div>
                <label htmlFor="email">Email</label>
                <input {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )} />
            <Field name="password" id="password" type="password" render={({ input, meta }) => (
              <div>
                <label htmlFor="password">Password</label>
                <input {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )} />
            <Spacer height={24} />
            <button type="submit">Login</button>
          </form>
        )}
      </Form>
    </Container>
  );
};

export default Login;
