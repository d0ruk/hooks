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

const App = () => (
  <main>
    <Hanger />
    <hr />
    <Form />
    <hr />
    <Portal />
    <hr />
    <Intersection />
    <hr />
    <Fetch />
    <hr />
    <Media />
    <hr />
    <Location />
    <hr />
  </main>
);

render(<App />, document.getElementById("root"));
