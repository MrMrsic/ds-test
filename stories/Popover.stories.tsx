import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "../src/components/Popover/Popover";
import { Button } from "../src/components";

import React, { Children, useState } from "react";
import { Space } from "antd";

const meta: Meta<typeof Popover> = {
  title: "Feedback/Popover",
  component: Popover,
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
type Story = StoryObj<typeof Popover>;

export const Overview = {
  render: () => {
    const [open, setOpen] = useState(false);

    const hide = () => {
      setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
    };
    const content = (
      <div>
        <p>Content1</p>
        <p>Content2</p>
      </div>
    );
    return (
      <>
        <Popover
          content={content}
          title="Title"
          placement="rightTop"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Button type="primary">Open Modal</Button>
        </Popover>
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
