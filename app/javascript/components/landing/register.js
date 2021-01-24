import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Cookies from 'js-cookie';
import styled from '@emotion/styled';
import { Spacer } from '../utils/layout';
import { useRegister } from '../../hooks/auth';
import { Error } from '../utils/error';

const Container = styled.div`
`;

const Register = () => {
  const [register] = useRegister();
  const [error, setError] = useState();

  const onSubmit = (input) => {
    setError();
    register({ variables: { input }}).then(({ data }) => {
      const { token } = data.register;
      Cookies.set('user', token, { expires: 365 });
      location.reload();
    }).catch(({ graphQLErrors }) => {
      const error = graphQLErrors[0].message;
      setError(error);
    });
  }

  return (
    <Container>
      <h1>Register</h1>
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
            <button type="submit">Register</button>
            {error && <Error>{error}</Error>}
          </form>
        )}
      </Form>
    </Container>
  );
};

export default Register;
