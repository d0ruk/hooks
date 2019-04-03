import React from "react";

import { useLocation } from "..";

const styles = {
  portal: {
    background: "mistyrose",
    height: "20rem",
    padding: "1rem"
  }
};

export default () => {
  const location = useLocation();

  return (
    <section>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </section>
  );
};
