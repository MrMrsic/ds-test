import { Meta, StoryObj } from "@storybook/react";
import { Toggle, Button } from "../src/components";

import React, { Children, useState } from "react";
import { Space } from "antd";

const meta: Meta<typeof Toggle> = {
  title: "Inputs/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Allow users to turn an single option on or off. They are usually used to activate or deactivate a specific setting.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Overview = {
  render: () => {
    const onChange = (checked: boolean) => {
      console.log(`switch to ${checked}`);
    };
    return (
      <>
        <Toggle defaultChecked onChange={onChange} />
      </>
    );
  },

  name: "Overview",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export const WithTextAndLabel = {
  render: () => {
    const onChange = (checked: boolean) => {
      console.log(`switch to ${checked}`);
    };
    return (
      <>
        <Space direction="vertical" size="middle">
          <Toggle
            onChange={onChange}
            checkedChildren="On"
            unCheckedChildren="Off"
            label="Trigger Downstream Flows"
            labelPosition="right"
          />
          <Toggle
            onChange={onChange}
            checkedChildren="On"
            unCheckedChildren="Off"
            label="Trigger Downstream Flows"
            labelPosition="left"
            defaultChecked
          />
          <Toggle
            onChange={onChange}
            checkedChildren="On"
            unCheckedChildren="Off"
            label="Trigger Downstream Flows"
            labelPosition="top"
          />
        </Space>
      </>
    );
  },

  name: "With text and label",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
