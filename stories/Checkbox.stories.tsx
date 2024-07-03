import { Meta, StoryObj } from "@storybook/react";
import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "../src/components/Checkbox/Checkbox";

import React from "react";
import { Space } from "antd";

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Checkboxes allow users to select one or more items from a set of options.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Overview = {
  render: () => {
    return (
      <>
        <Checkbox>Option</Checkbox>
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
