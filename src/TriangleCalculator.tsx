import React, { useState } from 'react';
import { useAreaContext } from './AreaContext';

const TriangleCalculator: React.FC = () => {
  const [base, setBase] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number>(0);
  const { calculateTriangleArea } = useAreaContext();

  const calculateArea = () => {
    setArea(calculateTriangleArea(base, height));
  };

  return (
    <div>
      <h2>Triangle Area Calculator</h2>
      <div>
        <label>
          Base:
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
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
        <svg width="100%" height="200" viewBox="0 0 200 200">
        <polygon
          points={`0,${height} ${base},${height} 0,0`}
          style={{ fill: 'lightblue', stroke: 'blue', strokeWidth: 1 }}
        />
      </svg>
      </div>
    </div>
  );
};

export default TriangleCalculator;
