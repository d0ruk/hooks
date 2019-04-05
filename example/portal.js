import React from "react";

import { usePortal } from "..";

const styles = {
  portal: {
    // backgroundColor: "rgba(0,0,0,.2)",
    // position: "absolute",
    // width: "100vw",
    // height: "70vh",
    // top: 0
  },
  container: {
    background: "mistyrose",
    height: "20rem",
    padding: "1rem"
  },
  span: {
    display: "block"
  }
};

export default () => {
  const { open: openPortal, close: closePortal, isOpen, Portal } = usePortal({
    // renderBelow: true,
    mount: "#portal", // "#xsection"
    // isOpen: true,
  });

  return (
    <section>
      <button onClick={openPortal}>Open Portal</button>
      {isOpen && (
        <Portal style={styles.portal}>
          <div style={styles.container}>
            <button onClick={closePortal}>Close me!</button>
            <span style={styles.span}>or hit ESC or click outside of me.</span>
          </div>
        </Portal>
      )}
    </section>
  );
};
