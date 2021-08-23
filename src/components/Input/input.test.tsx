import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input, InputProps } from "./input";

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: "test-input",
};
describe("test Input component", () => {
  test("should render the correct default Input", () => {
    const wrapper = render(<Input {...defaultProps} />);
    const testNode = wrapper.getByPlaceholderText(
      "test-input"
    ) as HTMLInputElement;
    expect(testNode).toBeInTheDocument();
    expect(testNode).toHaveClass("merzoo-input-inner");
    fireEvent.change(testNode, { target: { value: "23" } });
    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(testNode.value).toEqual("23");
  });
  test("should render the disabled Input on disabled property", () => {
    const wrapper = render(<Input disabled placeholder="disabled" />);
    const testNode = wrapper.getByPlaceholderText(
      "disabled"
    ) as HTMLInputElement;
    expect(testNode.disabled).toBeTruthy();
  });
  test("should render different input sizes on size property", () => {
    const wrapper = render(<Input placeholder="sizes" size="lg" />);
    const testContainer = wrapper.container.querySelector(
      ".merzoo-input-wrapper"
    );
    expect(testContainer).toHaveClass("input-size-lg");
  });
  test("should render prepand and append element on prepand/append property", () => {
    const { queryByText, container } = render(
      <Input placeholder="pend" prepend="https://" append=".com" />
    );
    const testContainer = container.querySelector(".merzoo-input-wrapper");
    expect(testContainer).toHaveClass(
      "input-group input-group-append input-group-prepend"
    );
    expect(queryByText("https://")).toBeInTheDocument();
    expect(queryByText(".com")).toBeInTheDocument();
  });
});
