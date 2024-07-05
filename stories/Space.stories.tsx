import { Meta, StoryObj } from "@storybook/react";
import { Space } from "../src/components";

import React, { Children, useState } from "react";

const meta: Meta<typeof Space> = {
  title: "General/Space",
  component: Space,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Avoid components clinging together and set a unified space.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Space>;

export const Overview = {
  render: () => {
    return (
      <>
        <Space direction="vertical" size="small">
          <p>Some content... </p>
          <p>Some content... </p>
          <p>Some content... </p>
          <p>Some content... </p>
          <p>Some content... </p>
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
