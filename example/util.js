export const log = {
  info: (text, ...rest) =>
    console.log(`%c${text}`, "font-size: 1.2rem;color: blue;", ...rest),
  ok: (text, ...rest) =>
    console.log(`%c${text}`, "font-size: 1.2rem;color: green;", ...rest),
  error: (text, ...rest) =>
    console.log(`%c${text}`, "font-size: 1.2rem;color: red;", ...rest)
};
