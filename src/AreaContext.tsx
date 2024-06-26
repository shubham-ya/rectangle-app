import React, { createContext, useState, ReactNode, useContext } from 'react';

type CalculatorView = 'triangle' | 'rectangle';

interface AreaContextType {
  view: CalculatorView;
  setView: (view: CalculatorView) => void;
  calculateTriangleArea: (base: number, height: number) => number;
  calculateRectangleArea: (width: number, height: number) => number;
}

const AreaContext = createContext<AreaContextType | undefined>(undefined);

const AreaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [view, setView] = useState<CalculatorView>('triangle');

  const calculateTriangleArea = (base: number, height: number) => {
    return 0.5 * base * height;
  };

  const calculateRectangleArea = (width: number, height: number) => {
    return width * height;
  };

  return (
    <AreaContext.Provider value={{ view, setView, calculateTriangleArea, calculateRectangleArea }}>
      {children}
    </AreaContext.Provider>
  );
};

const useAreaContext = () => {
  const context = useContext(AreaContext);
  if (!context) {
    throw new Error('useAreaContext must be used within an AreaProvider');
  }
  return context;
};

export { AreaProvider, useAreaContext };
