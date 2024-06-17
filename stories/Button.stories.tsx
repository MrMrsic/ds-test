import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { SearchOutlined } from "@ant-design/icons";
import { ButtonProps } from "antd";
import { Button } from "../src/components/Button";
import { Markdown, Description } from "@storybook/blocks";

import React from "react";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Buttons allow users to trigger an action or event with a single click. For example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action, or performing a delete operation.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  args: {
    type: "primary",
    children: "Button",
    className: "test-class",
  },
};

export const Types = {
  render: () => (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </div>
    </>
  ),

  name: "Types",
  parameters: {
    docs: {
      description: {
        story:
          "There can be more than one button in a screen, but to create the hierarchy of actions we need to use button types.",
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),

  name: "Sizes",
};

export const Disabled = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button disabled>Default</Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="text" disabled>
        Dashed
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
    </div>
  ),

  name: "Disabled",
  parameters: {
    docs: {
      description: {
        story:
          "Set disable button for something that isn’t usable. Use a tooltip on hover in order to indicate the reason of the disabled action.",
      },
    },
  },
};

export const Icons = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button type="primary" icon={<SearchOutlined />}>
        Primary
      </Button>
      <Button icon={<SearchOutlined />}>Default</Button>
      <Button type="dashed" icon={<SearchOutlined />}>
        Dashed
      </Button>
      <Button type="text" icon={<SearchOutlined />}>
        Text
      </Button>
      <Button type="link" icon={<SearchOutlined />}>
        Link
      </Button>
    </div>
  ),

  name: "Icons",
};
