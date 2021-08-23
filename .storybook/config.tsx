import { configure, addDecorator } from "@storybook/react";
import "../src/styles/index.scss";
configure(require.context("../src", true, /\.stories\.tsx$/), module);
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// init icon lib
library.add(fas);
