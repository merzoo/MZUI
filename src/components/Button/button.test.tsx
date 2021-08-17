import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./button";
const defaultProps: ButtonProps = {
  onClick: jest.fn(),
};

const textProps: ButtonProps = {
  className: "test",
  btnType: "primary",
  size: "lg",
};

const disabledProps = {
  onClick: jest.fn(),
  disabled: true,
};

describe("Button", () => {
  test("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>default button</Button>);
    const element = wrapper.getByText("default button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(
      <Button {...textProps}>primary button with class</Button>
    );
    const element = wrapper.getByText("primary button with class");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn test btn-primary btn-lg");
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType="link" href="//www.baidu.com">
        link
      </Button>
    );
    const element = wrapper.getByText("link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>disabled button</Button>);
    const element = wrapper.getByText("disabled button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveAttribute("disabled");
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
