import React, { useState } from 'react';

const Rectangle: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  const calculateArea = () => {
    setArea(width * height);
  };

  return (
    <div>
      <h1>Rectangle Area Calculator</h1>
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
        <h2>Area: {area}</h2>
      </div>
      <div>
        <svg height={height} width={width}>
          <rect width={width} height={height} style={{ fill: "lime", stroke: "purple", strokeWidth: 1 }} />
        </svg>
      </div>
    </div>
  );
};

export default Rectangle;
