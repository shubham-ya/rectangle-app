import React, { useState } from 'react';
import { useAreaContext } from './AreaContext';

const RectangleCalculator: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number>(0);
  const { calculateRectangleArea } = useAreaContext();

  const calculateArea = () => {
    setArea(calculateRectangleArea(width, height));
  };

  return (
    <div>
      <h2>Rectangle Area Calculator</h2>
      <div>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateArea}>Calculate Area</button>
      <div>
        <h3>Area: {area}</h3>
      </div>
    </div>
  );
};

export default RectangleCalculator;
