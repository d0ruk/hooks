import React from "react";

import { usePortal } from "..";

const styles = {
  container: {
    background: "mistyrose",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: "fixed",
    // height: "100vh",
    // width: "80%",
    // top: 0,
    // left: 0,
  },
  span: {
    display: "block"
  }
};

export default () => {
  const { open: openPortal, close: closePortal, isOpen, Portal } = usePortal({
    renderBelow: true,
    mount: "#portal", // "#xsection"
    // isOpen: true,
  });

  return (
    <section>
      <button onClick={openPortal}>usePortal</button>
      {isOpen && (
        <Portal>
          <div style={styles.container}>
            <button onClick={closePortal}>Close me!</button>
            <span style={styles.span}>or hit ESC or click outside of me.</span>
          </div>
        </Portal>
      )}
    </section>
  );
};
