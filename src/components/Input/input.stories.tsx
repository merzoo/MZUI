import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./input";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Input",
  component: Input,
  decorators: [withInfo],
  parameters: {
    info: {
      inline: true,
    },
  },
} as Meta;

const ControlledInput = () => {
  const [value, setValue] = useState();
  return (
    <Input
      style={{ width: "300px" }}
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
export const DefaultInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <ControlledInput />
  </>
);
export const DisabledInput = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);

export const IconInput = () => (
  <Input
    style={{ width: "300px" }}
    placeholder="input with icon"
    icon="search"
  />
);

export const SizeInput = () => (
  <>
    <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </>
);

export const PandInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
  </>
);
