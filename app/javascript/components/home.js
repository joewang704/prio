import React from 'react';
import Tasks from './tasks';
import CreateTask from './create_task';
import ActiveTasks from './active_tasks';
import { Spacer } from './utils/layout';

const Home = () => (
  <div>
    <ActiveTasks />
    <Tasks />
    <CreateTask />
    <Spacer height={48} />
    <div className="caption">
      Color pallete from{' '}
      <a href="https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0" target="_blank">coolors.io</a>
    </div>
  </div>
);

export default Home;