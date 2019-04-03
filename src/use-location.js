import { useState, useEffect } from "react";

import { isClient, on, off } from "./util";

const patchHistoryMethod = method => {
  const mtd = method.toLowerCase();
  const originalFn = window.history[mtd];

  window.history[mtd] = function(state) {
    const result = originalFn.apply(this, arguments);
    const event = new Event();

    event.state = state;
    window.dispatchEvent(event);

    return result;
  };
};

if (isClient) {
  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");
}

export default () => {
  const getLocation = trigger => {
    const { state, length } = window.history;

    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    } = window.location;

    return {
      trigger,
      state,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };

  const [state, setState] = useState(
    isClient
      ? getLocation("load")
      : {
          trigger: "load",
          length: 1
        }
  );

  const onPopstate = () => setState(getLocation("popstate"));
  const onPushstate = () => setState(getLocation("pushstate"));
  const onReplacestate = () => setState(getLocation("replacestate"));

  useEffect(() => {
    on(window, "popstate", onPopstate);
    on(window, "pushstate", onPushstate);
    on(window, "replacestate", onReplacestate);

    return () => {
      off(window, "popstate", onPopstate);
      off(window, "pushstate", onPushstate);
      off(window, "replacestate", onReplacestate);
    };
  }, []);

  return state;
};
