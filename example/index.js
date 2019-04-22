import React from "react";
import { render } from "react-dom";

import "./index.scss";
import * as hooks from "..";
import { log } from "./util";

import Hanger from "./hanger";
import Form from "./form";
import Fetch from "./fetch";
import Media from "./media";
import Portal from "./portal";
import Intersection from "./intersection";
import Location from "./location";

log.info("lib", hooks);

const App = () => {
  return (
    <main>
      <h2>
        <a href="https://github.com/kitze/react-hanger">react-hanger</a>
      </h2>
      <Hanger />
      <hr />
      <h2>
        <a href="https://github.com/wsmd/react-use-form-state">
          react-use-form-state
        </a>
      </h2>
      <Form />
      <hr />
      <Portal />
      <hr />
      <h2>
        <a href="https://github.com/bsonntag/react-use-intersection-observer">
          react-use-intersection-observer
        </a>
      </h2>
      <Intersection />
      <hr />
      <h2>
        <a href="https://github.com/ilyalesik/react-fetch-hook">
          react-fetch-hook
        </a>
      </h2>
      <Fetch />
      <hr />
      <h2>
        <a href="https://github.com/streamich/use-media">use-media</a>
      </h2>
      <Media />
      <hr />
      <Location />
      <hr />
    </main>
  );
};

render(<App />, document.getElementById("root"));
