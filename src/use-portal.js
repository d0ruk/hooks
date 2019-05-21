import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { isString } from "lodash";
import select from "select-dom";

import { setStyles } from "./util";

const ESC = 27;
const defaults = {
  closeOnClick: true,
  closeOnEsc: true,
  renderBelow: false,
  isOpen: false
};

export default config => {
  const {
    closeOnClick,
    closeOnEsc,
    renderBelow,
    isOpen,
    mount
  } = Object.assign({}, defaults, config);
  const [_isOpen, setIsOpen] = useState(isOpen);
  const portal = useRef(document.createElement("div"));
  const toMount =
    isString(mount) && select.exists(mount)
      ? select(mount)
      : document && document.body;

  useEffect(() => {
    toMount.appendChild(portal.current);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOnClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOnClick);
      toMount.removeChild(portal.current);
    };
  }, [toMount]);

  const open = ({ nativeEvent, pageX, pageY }) => {
    if (nativeEvent) nativeEvent.stopImmediatePropagation();

    if (renderBelow) {
      const style = {
        position: "absolute",
        left: pageX + "px",
        top: pageY + "px"
      };

      setStyles(portal.current, style);
    }

    portal.current.style.visibility = "visible";
    setIsOpen(true);
  };

  const close = () => {
    portal.current.style.visibility = "hidden";
    setIsOpen(false);
  };

  const handleKeyDown = ({ keyCode }) =>
    closeOnEsc && keyCode === ESC && close();

  const handleOnClick = ({ target, button }) => {
    if (closeOnClick) {
      if (portal.current.contains(target) || button !== 0) return;
      close();
    }
  };

  return {
    isOpen: _isOpen,
    open,
    close,
    toggle: e => (_isOpen ? close() : open(e)),
    Portal: ({ children, style }) => {
      setStyles(portal.current, style);
      return createPortal(children, portal.current);
    }
  };
};
