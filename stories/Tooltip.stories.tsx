import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../src/components/Tooltip";
import { Button } from "../src/components/Button";

import React, { Children, useState } from "react";
import { Space } from "antd";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tooltips provide helpful information and can include detailed context about a specific component when a user hovers on it.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Overview = {
  render: () => {
    return (
      <>
        <Tooltip
          title="prompt text"
          placement="topLeft"
          autoAdjustOverflow={true}
        >
          <p>Some content with tooltip... </p>
        </Tooltip>
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
