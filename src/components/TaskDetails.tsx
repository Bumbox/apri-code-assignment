import React from 'react';
import counterStore from '../stores/counterStore';
import { observer } from 'mobx-react-lite';

const TaskDetails: React.FC = observer(() => {
  return (
    <div className="flex h-dvh flex-col">
      <h1>{counterStore.count}</h1>
      <h2>{counterStore.double}</h2>

      <button onClick={counterStore.increment}>+</button>
      <button onClick={counterStore.decrement}>-</button>
    </div>
  );
});

export default TaskDetails;
