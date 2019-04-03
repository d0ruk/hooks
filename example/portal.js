import React from "react";

import { usePortal } from "..";

const styles = {
  portal: {
    background: "mistyrose",
    height: "20rem",
    padding: "1rem",
  }
};

export default () => {
  const { openPortal, closePortal, togglePortal, isOpen, Portal } = usePortal({
    closeOnOutsideClick: true,
    closeOnEsc: true,
    renderBelowClickedElement: true, // appear directly under the clicked element/node in the DOM
    bindTo: document.body,
    isOpen: false
  });

  return (
    <section>
      <button onClick={openPortal}>Open Portal</button>
      {isOpen && (
        <Portal>
          <p style={styles.portal}>
            <button onClick={closePortal}>Close me!</button>
            <div>or hit ESC or click outside of me.</div>
          </p>
        </Portal>
      )}
    </section>
  );
};
