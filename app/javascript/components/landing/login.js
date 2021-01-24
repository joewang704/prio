import React, { useState } from 'react';
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled';
import Cookies from 'js-cookie'

import { Spacer } from '../utils/layout';
import { Error } from '../utils/error';
import { useLogin } from '../../hooks/auth';

const Container = styled.div`
`;

const Login = () => {
  const [login] = useLogin();
  const [error, setError] = useState();

  const onSubmit = (input) => {
    setError();
    login({ variables: { input }}).then(({ data }) => {
      const { token } = data.login;
      Cookies.set('user', token, { expires: 365 });
      location.reload();
    }).catch(({ graphQLErrors }) => {
      const error = graphQLErrors[0].message;
      setError(error);
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
            {error && <Error>{error}</Error>}
          </form>
        )}
      </Form>
    </Container>
  );
};

export default Login;
