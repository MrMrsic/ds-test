import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../src/components";
import { Button } from "../src/components/Button";

import React, { Children, useState } from "react";
import { Space } from "antd";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Alert banners show pressing and high-signal messages, such as system alerts. They are meant to be noticed and prompt users to take action.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Overview = {
  render: () => {
    return (
      <>
        <Space direction="vertical" size="middle">
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
        </Space>
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

export const WithIconsAndDescription = {
  render: () => {
    return (
      <>
        <Space direction="vertical" size="middle">
          <>
            <Alert message="Success Tips" type="success" showIcon />
            <Alert message="Informational Notes" type="info" showIcon />
            <Alert message="Warning" type="warning" showIcon closable />
            <Alert message="Error" type="error" showIcon />
            <Alert
              message="Success Tips"
              description="Detailed description and advice about successful copywriting."
              type="success"
              showIcon
            />
            <Alert
              message="Informational Notes"
              description="Additional description and information about copywriting."
              type="info"
              showIcon
            />
            <Alert
              message="Warning"
              description="This is a warning notice about copywriting."
              type="warning"
              showIcon
              closable
            />
            <Alert
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon
            />
          </>
        </Space>
      </>
    );
  },

  name: "With icons and description",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
