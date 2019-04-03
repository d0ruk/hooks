import React from "react";

import { useFormState } from "..";
import { log } from "./util";

export default function SignUpForm() {
  const [formState, { text, email, password, radio }] = useFormState();
  return (
    <section>
      <form onSubmit={() => log.info("formState", formState)}>
        <input {...text("name")} />
        <input {...email("email")} required />
        <input {...password("password")} required minLength="8" />
        <input {...radio("plan", "free")} />
        <input {...radio("plan", "premium")} />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
