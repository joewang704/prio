import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { Trash2, ZapOff, Zap, CheckCircle } from 'react-feather';

import { useTasks, useDeactivateTask, useCompleteTask } from '../hooks/tasks';
import { useRemoveTask } from '../hooks/remove_task';
import { Spacer } from './utils/layout';
import { TextButton } from './utils/button';
import { Label } from './utils/label';
import { ActiveTaskLabel } from './active_task_label';
import { COLORS } from '../utils/constants';

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const Description = styled.div`
  font-size: 14px;
  color: #333;
`;
const Duration = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 8px;
`;

const CompleteCheckbox = styled(CheckCircle)`
  color: ${COLORS.grey};
  &:hover {
    color: ${COLORS.green};
  }
`;

const date = new Date(1970,0,1);

const Tasks = () => {
  const { data, loading } = useTasks();
  const [removeTask] = useRemoveTask();
  const [deactivateTask] = useDeactivateTask();
  const [completeTask] = useCompleteTask();

  if (!data || loading) return null;

  const { tasks } = data;
  const activeTasks = tasks.filter(({ state }) => state === 'active');

  return (
    <div>
      <h1>Active Tasks (Max 3)</h1>
      {activeTasks.length ? activeTasks.map(({ id, title, duration, description, category, state }) => (
        <Card key={id}>
          <Header>
            <Title>{title}</Title>
            <Tags>
              <Label color={COLORS.pink}>{category.name}</Label>
              <ActiveTaskLabel state={state} />
              <TextButton onClick={() => deactivateTask({ variables: { input: { id }}})}><ZapOff /></TextButton>
              <TextButton onClick={() => removeTask({ variables: { input: { id }}})}><Trash2 /></TextButton>
            </Tags>
          </Header>
          <Spacer height={8} />
          <Description>{description}</Description>
          <Duration>Will take {moment.duration(duration, 'seconds').humanize()}</Duration>
          <TextButton onClick={() => completeTask({ variables: { input: { id }}})}><CompleteCheckbox /></TextButton>
        </Card>
      )) : <>No active tasks. Add some new ones to the task list and click the <Zap /> to play them.</>}
    </div>
  );
};

export default Tasks;
