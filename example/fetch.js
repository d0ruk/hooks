import React from "react";

import { useFetch, usePromise } from "..";

export default () => {
  const { isLoading, data } = useFetch("https://swapi.co/api/people/1", {
    method: "get",
    headers: {
      Accept: "application/json, application/xml, text/plain, text/html, *.*",
      "Content-Type": "application/json; charset=utf-8"
    },
    formatter: response => response.json()
  });

  return (
    <section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </section>
  );
};
