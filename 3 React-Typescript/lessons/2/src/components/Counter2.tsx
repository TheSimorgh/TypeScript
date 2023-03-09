import React, { ReactNode, useState, useMemo } from "react";
type CounterProps = {
   title: string;
  children: ReactNode;
};
const Counter2 = ({ title,children }: CounterProps) => {
  const [count2, setCount2] = useState<number>(0);
  const inc = ():void => setCount2((prev) => prev + 1);
  const dec = ():void => setCount2((prev) => prev + 1);
  // const incCount = useMemo(() => inc(), [count2]);
  // const decCount = useMemo(() => dec(), [count2]);

  return (
    <div>
      <h2>{count2}</h2>
      <h1>{children}</h1>

      <div>
      <button onClick={inc}>Add</button>
        <button onClick={dec}>Decrease</button>

        
      </div>
    </div>
  );
};

export default Counter2;
