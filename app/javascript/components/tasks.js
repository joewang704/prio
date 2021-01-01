import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import { useTasks, useActivateTask, useDeactivateTask } from '../hooks/tasks';
import { useRemoveTask } from '../hooks/remove_task';

import { Label } from './utils/label';
import { TextButton } from './utils/button';
import { ActiveTaskLabel } from './active_task_label';
import { Trash2, Zap, ZapOff } from 'react-feather';
import { COLORS } from '../utils/constants';

const List = styled.div`
  border-radius: 4px;
  width: 800px;
  padding: 0 16px;
  border: 1px solid rgb(235, 236, 237);
`;

const Item = styled.div`
  border-bottom: 1px solid rgb(235, 236, 237);
  padding: 24px 0;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 440px;
`;

const Category = styled.div`
  width: 100px;
`;

const Duration = styled.div`
  width: 100px;
`;

const Actions = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
`;

const Tasks = () => {
  const { data, loading } = useTasks({ userId: 1 });
  const [removeTask] = useRemoveTask();
  const [activateTask] = useActivateTask();
  const [deactivateTask] = useDeactivateTask();

  if (!data || loading) return null;

  const { tasks } = data;

  return (
    <div>
      <h1>Task List</h1>
      <List>
        {tasks.filter(({ state }) => state !== 'completed').map(({ id, state, title, duration, category }) => (
          <Item key={id}>
            <Title>{title}</Title>
            <Category><Label color={COLORS.pink}>{category.name}</Label></Category>
            <Duration>{moment.duration(duration, 'seconds').humanize()}</Duration>
            <Actions>
              <ActiveTaskLabel state={state} width={80} />
              {state === 'active' ?
                <TextButton onClick={() => deactivateTask({ variables: { input: { id }}})}><ZapOff /></TextButton> :
                <TextButton onClick={() => activateTask({ variables: { input: { id }}})}><Zap /></TextButton>}
              <TextButton onClick={() => removeTask({ variables: { input: { id }}})}><Trash2 /></TextButton>
            </Actions>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Tasks;