import { configure, addDecorator } from "@storybook/react";
configure(require.context("../src", true, /\.stories\.tsx$/), module);
