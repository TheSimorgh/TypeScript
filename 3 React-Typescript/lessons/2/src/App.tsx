import { useCallback, useEffect, useState, useMemo, useRef } from "react";
const items = ["☕ Coffee", "🌮 Tacos", "💻 Code"];
import { MouseEvent, KeyboardEvent } from "react";
import Counter2 from "./components/Counter2";
import Counter from "./components/Counter";
import Counter3 from "./components/Counter3";
interface User {
  id: number;
  username: string;
}
type fibFun = (n: number) => number;
const myNum: number = 4;
const fib: fibFun = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
function App() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [count, setCount] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  // const [count,setCount]=useState<User[] >([])
  // const [count,setCount]=useState<User >({}as User)
  // const [count,setCount]=useState<number | null>(0)
  console.log("one");

  useEffect(() => {
    console.log(`Mounting`);
    console.log(`Users:${users}`);

    return () => console.log(`Unmounting`);
  }, [users]);

  const addFun = useCallback(
    (e: any): void => setCount((prev) => prev + 1),
    []
  );
  const decFun = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev - 1),
    []
  );
  //  const decFun = useCallback(():void => setCount((prev) => prev - 1), []);

  const resFun = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => (prev = 0)),
    []
  );
  // const resFun = useCallback(():void => setCount(prev=>prev=0), []);

  const resultFunc = useMemo(() => fib(count), [count]);
  // const resultFunc2=useMemo<number>(()=>fib(myNum),[myNum])

  return (
    <>
      <h4>{count}</h4>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Remove</button>
      </div>
      <div>
        {/* {resultFunc}
        {resultFunc2} */}
        <button onClick={addFun}>Add</button>
        <button onClick={decFun}>Remove</button>
        <button onClick={resFun}>Res</button>
      </div>
      <input ref={inputRef} type="text" />
      <input type="text" />

      <h1>Counter 3 </h1>
      <Counter setCount={setCount3}>{count3} </Counter>

      <h1>Counter 2 </h1>
      <Counter2 title={"Counter 2"}>Counter2</Counter2>
      <Counter3>{(num: number) => <>Current Count: {num}</>}</Counter3>

    </>
  );
}

export default App;
