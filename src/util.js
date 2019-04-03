export const isClient = typeof window === "object";

export const on = (obj, ...args) => obj.addEventListener(...args);

export const off = (obj, ...args) => obj.removeEventListener(...args);
