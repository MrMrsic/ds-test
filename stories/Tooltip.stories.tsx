import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../src/components";

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
          title={
            <div>
              <div>Lorem ipsum sdfsjnd fdsf jnčsdf </div>
              <div>asdfjvsdjfvnsčdfjvnsd</div>
              <div>dfbisdf 087hsd08f hdfh df h</div>
            </div>
          }
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
