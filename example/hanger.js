import React from "react";
import {
  useInput,
  useBoolean,
  useNumber,
  useArray,
  useOnMount,
  useOnUnmount
} from "..";
import { log } from "./util";

export default () => {
  const newTodo = useInput("");
  const showCounter = useBoolean(true);
  const limitedNumber = useNumber(3, { lowerLimit: 0, upperLimit: 5 });
  const counter = useNumber(0);
  const todos = useArray(["hi there", "sup", "world"]);

  const rotatingNumber = useNumber(0, {
    lowerLimit: 0,
    upperLimit: 4,
    loop: true
  });

  useOnMount(() => log.ok("App mounted"));
  useOnUnmount(() => log.ok("App unmounted"));
  log.info("counter", counter);
  return (
    <section>
      <button onClick={showCounter.toggle}> toggle counter </button>
      <button onClick={counter.increase}> increase </button>
      {showCounter.value && <span> {counter.value} </span>}
      <button onClick={counter.decrease}> decrease </button>
      <button onClick={todos.clear}> clear todos </button>
      <input type="text" value={newTodo.value} onChange={newTodo.onChange} />
    </section>
  );
};
