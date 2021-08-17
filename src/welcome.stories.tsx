import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>👏🏻组件库欢迎页</h1>
      </>
    );
  },
  { info: { disable: true } }
);
