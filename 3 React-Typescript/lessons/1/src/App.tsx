import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";
const items = ["☕ Coffee", "🌮 Tacos", "💻 Code"];
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title="Simorgh" />
      <Section title={"Hello"}>Hello </Section>
      <Counter setCount={setCount}>{count} </Counter>
      <List
        items={items}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
