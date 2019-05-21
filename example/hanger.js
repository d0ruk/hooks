import React, { useEffect, memo } from "react";
import {
  useInput,
  useLifecycleHooks,
  useBoolean,
  useNumber,
  useArray,
  useOnMount,
  useOnUnmount,
  useSetState
} from "..";
import { log } from "./util";

const Counter = ({ counter }) => {
  useOnMount(() => log.info("counter mounted"));
  useOnUnmount(() => log.info("counter unmounted"));

  return (
    <div id="counter">
      <button onClick={counter.increase}>+</button>
      <h2>{counter.value}</h2>
      <button onClick={counter.decrease}>- </button>
    </div>
  );
};

const User = () => {
  const { state, setState } = useSetState({ loading: false });
  const { loading, data } = state;

  useEffect(() => {
    setState({ loading: true });
    fetchData("user").then(data => setState({ loading: false, data }));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>useSetState</h3>
      {data && <div>Welcome {data.name}!</div>}
    </div>
  );
};

const Todos = () => {
  const todos = useArray(["Hi there", "sup", "world"]);
  const newTodo = useInput("");

  return (
    <div>
      <h3>useArray, useInput</h3>
      <input type="text" {...newTodo.bindToInput} placeholder="new todo" />
      <button
        disabled={!newTodo.hasValue}
        onClick={() => {
          todos.add(newTodo.value);
          newTodo.clear();
        }}
      >
        add
      </button>
      <ul>
        {todos.value.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => todos.removeIndex(i)}>x</button>
          </li>
        ))}
      </ul>
      <button disabled={!todos.value.length} onClick={todos.clear}>
        clear
      </button>
    </div>
  );
};

const App = () => {
  const showCounter = useBoolean(true);
  const counter = useNumber(0);
  const limitedNumber = useNumber(42, { lowerLimit: 0, upperLimit: 5 });
  const rotatingNumber = useNumber(0, {
    lowerLimit: 0,
    upperLimit: 4,
    rotate: true
  });

  return (
    <section id="hanger">
      <div>
        <h3 style={{ display: "inline-block" }}>useNumber</h3>
        <input type="checkbox" onClick={showCounter.toggle} />
        {showCounter.value ? "hide" : "show"}
        {showCounter.value && <Counter counter={counter} />}
        <h3>Limited number counter</h3>
        <p>
          This counter will stop increasing/decreasing when it reaches the
          "lowerLimit" or the "upperLimit"
        </p>
        <br />
        <Counter counter={limitedNumber} />
        <h3>Rotating number counter</h3>
        <p>
          This counter will rotate back to the "lowerLimit" if it reaches the
          "upperLimit" and vice-versa
        </p>
        <Counter counter={rotatingNumber} />
      </div>
      <Todos />
      <User />
    </section>
  );
};

function fetchData(type) {
  const data = {
    user: { name: "Kristijan", surname: "Ristovski" },
    todos: [{ title: "Buy bread", id: 1 }, { title: "Go shopping", id: 2 }]
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data[type]);
    }, 1000);
  });
}

export default memo(App);
