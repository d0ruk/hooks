import React from "react";

import { useMedia, useMediaLayout } from "..";
import { log } from "./util";

export default () => {
  // Accepts an object of features to test
  const isWide = useMedia({ minWidth: 1000 });
  const isWideL = useMediaLayout({ minWidth: 1000 });
  // Or a regular media query string
  const isNarrow = useMedia("(max-width: 500)");
  const isNarrowL = useMediaLayout("(max-width: 500)");

  return (
    <section>
      <div>minWidth 1000?: {isWide ? "yes" : "no"}</div>
      <div>minWidth(L) 1000? ?: {isWideL ? "yes" : "no"}</div>
      <div>maxWidth 500 ?: {isNarrow ? "yes" : "no"}</div>
      <div>maxWidth(L) 500 ?: {isNarrowL ? "yes" : "no"}</div>
    </section>
  );
};
