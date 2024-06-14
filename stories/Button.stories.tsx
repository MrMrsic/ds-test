import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "antd";
import { Button } from "../src/components/Button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "primary",
    children: "Primary",
    className: "test-class",
  },
};

export const States = {
  render: () => (
    <>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </>
  ),

  name: "Sizes",
};

const ListTemplate: Story = {
  render: () => {
    return (
      <>
        <Button>Regular</Button>
        <Button type="primary">Primary</Button>
      </>
    );
  },
};
