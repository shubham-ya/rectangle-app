import React from 'react';
import { useAreaContext } from './AreaContext';

const ViewSwitcher: React.FC = () => {
  const { setView } = useAreaContext();

  return (
    <div>
      <button onClick={() => setView('triangle')}>Triangle Calculator</button>
      <button onClick={() => setView('rectangle')}>Rectangle Calculator</button>
    </div>
  );
};

export default ViewSwitcher;
