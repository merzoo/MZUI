import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎使用 mzui </h1>
      </>
    );
  },
  { info: { disable: true } }
);
