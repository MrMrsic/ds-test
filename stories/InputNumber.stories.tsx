import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
//import { SearchOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { InputNumber } from "../src/components/TextField/InputNumber";
import React from "react";

const meta: Meta<typeof InputNumber> = {
  title: "Inputs/InputNumber",
  component: InputNumber,
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
type Story = StoryObj<typeof InputNumber>;

export const Overview: Story = {
  args: {
    placeholder: "Basic usage",
    label: "Label",
    className: "test-class",
    style: { width: "300px" },
    helperText: "Type number",
  },
};

export const Sizes = {
  render: () => (
    <>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <InputNumber
            size="small"
            label="Small input"
            placeholder="Enter text..."
          />
        </Space.Compact>
        <Space.Compact>
          <InputNumber
            size="middle"
            label="Med input"
            placeholder="Enter text..."
          />
        </Space.Compact>
        <Space.Compact>
          <InputNumber
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

export const WithIcons = {
  render: () => (
    <>
      <div>
        <InputNumber
          label="With prefix icon"
          placeholder="Enter text..."
          prefix={
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{
                fill: "black",
                color: "black",
                width: "18px",
                height: "auto",
              }}
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
            </svg>
          }
        />
        <div>
          <br />
        </div>
        <InputNumber
          label="With sufix icon"
          placeholder="Enter text..."
          suffix={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "black",
                color: "black",
                width: "18px",
                height: "auto",
              }}
            >
              <path d="M14.5502 5.50514L12.4952 3.45014C12.227 3.19821 11.8756 3.05366 11.5077 3.04398C11.1399 3.0343 10.7813 3.16016 10.5002 3.39764L3.75022 10.1476C3.5078 10.3921 3.35685 10.7125 3.32272 11.0551L3.00022 14.1826C2.99012 14.2925 3.00437 14.4032 3.04197 14.5069C3.07956 14.6106 3.13957 14.7048 3.21772 14.7826C3.2878 14.8521 3.37091 14.9071 3.46229 14.9445C3.55367 14.9818 3.65152 15.0007 3.75022 15.0001H3.81772L6.94522 14.7151C7.28782 14.681 7.60825 14.5301 7.85272 14.2876L14.6027 7.53764C14.8647 7.26086 15.0063 6.89152 14.9965 6.51054C14.9866 6.12956 14.8261 5.76802 14.5502 5.50514V5.50514ZM6.81022 13.2151L4.56022 13.4251L4.76272 11.1751L9.00022 6.99014L11.0252 9.01514L6.81022 13.2151ZM12.0002 8.01014L9.99022 6.00014L11.4527 4.50014L13.5002 6.54764L12.0002 8.01014Z"></path>
            </svg>
          }
          style={{ width: "200px" }}
        />
      </div>
    </>
  ),

  name: "With Icons",
  parameters: {
    docs: {
      description: {
        story: "Add a prefix or suffix icons inside input.",
      },
    },
  },
};

export const States = {
  render: () => (
    <>
      <div>
        <InputNumber
          size="middle"
          label="Warning input"
          placeholder="Enter text..."
          status="warning"
        />
        <div>
          <br />
        </div>
        <InputNumber
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
        <InputNumber
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
