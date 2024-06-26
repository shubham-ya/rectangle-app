import React from 'react';
import { AreaProvider, useAreaContext } from './AreaContext';
import TriangleCalculator from './TriangleCalculator';
import RectangleCalculator from './RectangleCalculator';
import ViewSwitcher from './ViewSwitcher';
import './App.css';

const AppContent: React.FC = () => {
  const { view } = useAreaContext();

  return (
    <div className="App">
      <ViewSwitcher />
      {view === 'triangle' ? <TriangleCalculator /> : <RectangleCalculator />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AreaProvider>
      <AppContent />
    </AreaProvider>
  );
};

export default App;
