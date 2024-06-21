import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "../src/components/Radio";
import { HomeFilled, BankFilled } from "@ant-design/icons";

import React, { useState } from "react";
import { Space } from "antd";

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
        <RadioGroup onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
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

export const GroupButtons = {
  render: () => {
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
      setValue(e.target.value);
    };
    return (
      <>
        <Space direction="vertical" size="middle">
          <Space.Compact>
            <RadioGroup
              onChange={onChange}
              //defaultValue={"London"}
              buttonStyle="solid"
            >
              <Radio value={"Berlin"} isButton>
                <BankFilled style={{ marginRight: "6px" }} />
                Berlin
              </Radio>
              <Radio value={"London"} isButton checked>
                <HomeFilled style={{ marginRight: "6px" }} />
                London
              </Radio>
            </RadioGroup>
          </Space.Compact>
          <Space.Compact>
            <RadioGroup onChange={onChange} defaultValue={"London"}>
              <Radio value={"Berlin"} isButton>
                <BankFilled style={{ marginRight: "6px" }} />
                Berlin
              </Radio>
              <Radio value={"London"} isButton>
                <HomeFilled style={{ marginRight: "6px" }} />
                London
              </Radio>
            </RadioGroup>
          </Space.Compact>
        </Space>
      </>
    );
  },

  name: "Group as Buttons",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
