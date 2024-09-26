import React from 'react';
import TaskDetails from './TaskDetails';
import TaskList from './TaskList';

const MainPage: React.FC = () => {
  return (
    <div className="flex h-dvh">
      <div className="w-1/2 bg-slate-300 h-full">
        <TaskList />
      </div>
      <div className="w-1/2 bg-slate-500 h-full">
        <TaskDetails />
      </div>
    </div>
  );
};

export default MainPage;
