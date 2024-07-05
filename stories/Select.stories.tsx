import { Meta, StoryObj } from "@storybook/react";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "../src/components";

import React from "react";
import { Space } from "antd";

const meta: Meta<typeof Select> = {
  title: "Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Dropdown present a list of options from which a user can select one or several.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Overview: Story = {
  args: {
    label: "Name",
    placeholder: "Select name...",
    defaultValue: "lucy",
    style: { width: 250 },
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" },
      { value: "disabled", label: "Disabled", disabled: true },
    ],
    className: "test-class",
    helperText: "Whatever name you like most",
  },
};

export const Sizes = {
  render: () => (
    <>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Select
            size="small"
            label="Small"
            placeholder="Enter text..."
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Space.Compact>
        <Space.Compact>
          <Select
            size="middle"
            label="Med"
            placeholder="Enter text..."
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Space.Compact>
        <Space.Compact>
          <Select
            size="large"
            label="Large"
            placeholder="Enter text..."
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Space.Compact>
      </Space>
    </>
  ),

  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story: "There are three sizes available: Small, Medium, and Large",
      },
    },
  },
};

export const SearchAndSelect = {
  render: () => (
    <>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Select
            label="Search names"
            placeholder="Enter text..."
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
            showSearch
            style={{ width: 300 }}
            mode="tags" // mode="multiple"
            badgeIcon={
              <span style={{ fontStyle: "italic", fontSize: "12px" }}>(x)</span>
            }
          />
        </Space.Compact>
      </Space>
    </>
  ),

  name: "Search and Multi-Select",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
