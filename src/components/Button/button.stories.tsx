// Button.stories.ts | Button.stories.tsx
import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./button";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Button",
  component: Button,
  decorators: [withInfo],
  parameters: {
    info: {
      inline: true,
    },
  },
} as Meta;

export const Default = () => (
  <Button onClick={action("clicked")}> default button </Button>
);

export const ButtonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
);

export const ButtonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com">
      link button
    </Button>
  </>
);
