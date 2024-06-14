import { fn } from "@storybook/test";
import { Textfield } from "../src/components/Textfield";

export default {
  title: "Example/Textfield",
  component: Textfield,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    placeholder: "Placeholder test",
    title: "Title test",
    size: "large",
    validation: { text: "help text 123" },
  },
};

export const Small = {
  args: {
    placeholder: "Small component",
    title: "Label",
    className: "custom-class",
    size: "small",
  },
};
