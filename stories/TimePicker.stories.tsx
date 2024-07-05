import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
//import { SearchOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { TimePicker } from "../src/components";
import React from "react";

const meta: Meta<typeof TimePicker> = {
  title: "Inputs/TimePicker",
  component: TimePicker,
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
type Story = StoryObj<typeof TimePicker>;

export const Overview: Story = {
  args: {
    placeholder: "Basic usage",
    label: "Label",
    className: "test-class",
    style: { width: "300px" },
    helperText: "Type number",
    format: "h:mm a",
  },
};

export const Sizes = {
  render: () => (
    <>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <TimePicker
            size="small"
            label="Small input"
            placeholder="Enter text..."
          />
        </Space.Compact>
        <Space.Compact>
          <TimePicker
            size="middle"
            label="Med input"
            placeholder="Enter text..."
          />
        </Space.Compact>
        <Space.Compact>
          <TimePicker
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
        <TimePicker
          size="middle"
          label="Warning input"
          placeholder="Enter text..."
          status="warning"
        />
        <div>
          <br />
        </div>
        <TimePicker
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
        <TimePicker
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
