import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../src/components/Radio";

import React, { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "Inputs/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A radio represents an item in a single selection list.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Basic = {
  render: () => {
    return (
      <>
        <Radio>Option</Radio>
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

export const Group = {
  render: () => {
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
      setValue(e.target.value);
    };
    return (
      <>
        <Radio onChange={onChange} value={value} isGroup>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio>
      </>
    );
  },

  name: "Group",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
