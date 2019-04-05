import { kebabCase } from "lodash";

export const isClient = typeof window === "object";
export const on = (obj, ...args) => obj.addEventListener(...args);
export const off = (obj, ...args) => obj.removeEventListener(...args);

export const setStyles = (el, obj) => {
  if (!(el instanceof window.HTMLElement) || !obj) return;

  for (const [name, value] of Object.entries(obj)) {
    el.style[kebabCase(name)] = value;
  }
};
