import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
//import { SearchOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { AutoComplete } from "../src/components";
import React from "react";

const meta: Meta<typeof AutoComplete> = {
  title: "Inputs/AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const names = [
  { value: "John" },
  { value: "Erin" },
  { value: "Billy" },
  { value: "Al" },
];

export const Overview: Story = {
  args: {
    placeholder: "Search names database...",
    label: "Name",
    className: "test-class",
    style: { width: "300px" },
    helperText: "Enter any name",
    options: names,
    filterOption: (inputValue, option: any) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
  },
};

export const Sizes = {
  render: () => (
    <>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <AutoComplete
            size="small"
            label="Small input"
            placeholder="Enter text..."
          />
        </Space.Compact>
        <Space.Compact>
          <AutoComplete
            size="middle"
            label="Med input"
            placeholder="Enter text..."
            options={names}
            filterOption={(inputValue, option: any) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Space.Compact>
        <Space.Compact>
          <AutoComplete
            size="large"
            label="Large input"
            placeholder="Enter text..."
          />
        </Space.Compact>
      </Space>
    </>
  ),

  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story:
          "There are three sizes available: Small (24px), Medium (32px) and Large (40px).",
      },
    },
  },
};

export const States = {
  render: () => (
    <>
      <div>
        <AutoComplete
          size="middle"
          label="Warning input"
          placeholder="Enter text..."
          status="warning"
        />
        <div>
          <br />
        </div>
        <AutoComplete
          size="middle"
          label="Error input"
          placeholder="Enter text..."
          status="error"
        />
      </div>
    </>
  ),

  name: "States",
  parameters: {
    docs: {
      description: {
        story:
          "Add status to Input with status, which could be error or warning.",
      },
    },
  },
};

export const Validation = {
  render: () => (
    <>
      <div>
        <AutoComplete
          size="middle"
          label="Error input"
          placeholder="Enter text..."
          status="error"
          helperText="Something went wrong!"
        />
      </div>
    </>
  ),

  name: "Validation",
  parameters: {
    docs: {
      description: {
        story:
          "Use validation to give feedback to the user for a case where he has provided an invalid input. The validation error should appear when the user is done typing and getting out of the input’s focus.",
      },
    },
  },
};
