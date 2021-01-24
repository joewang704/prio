import React from 'react';
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled';
import CategorySelect from './category_select';
import { useCreateTask } from '../hooks/create_task';
import { Spacer } from './utils/layout';

const Container = styled.div`
`;

const CreateTask = () => {
  const [createTask] = useCreateTask();

  const onSubmit = (input) => {
    input.duration = Number(input.duration);
    return createTask({ variables: { input }});
  }

  return (
    <Container>
      <h1>Add New Task to List</h1>
      <Form onSubmit={onSubmit} autoComplete="off">
        {({ handleSubmit, form }) => (
          <form onSubmit={e => handleSubmit(e).then(() => form.reset())}>
            <label htmlFor="title">Title</label>
            <Field component="input" name="title" id="title" autoComplete="off" />
            <Field name="description" id="description" render={({ input, meta }) => (
              <div>
                <label htmlFor="description">Description</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )} />
            <Field name="duration" type="number" id="duration" render={({ input, meta }) => (
              <div>
                <label htmlFor="duration">Duration</label>
                <input {...input} autoComplete="off" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )} />
            <CategorySelect />
            <Spacer height={24} />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </Container>
  );
};

export default CreateTask;
