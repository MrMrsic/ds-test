import { Meta, StoryObj } from "@storybook/react";
import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "../src/components/Checkbox";

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

export const GroupButtons = {
  render: () => {
    const optionsWithDisabled = [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange", disabled: false },
    ];
    const onChange = (checkedValues: any) => {
      console.log("onChange checkedValues: ", checkedValues);
    };
    return (
      <>
        <Space direction="vertical" size="middle">
          <Space.Compact>
            <Checkbox.Group
              options={optionsWithDisabled}
              defaultValue={["Apple"]}
              onChange={onChange}
            />
          </Space.Compact>
        </Space>
      </>
    );
  },

  name: "Group as Buttons",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
