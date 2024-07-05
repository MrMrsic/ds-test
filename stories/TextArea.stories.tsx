import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
//import { SearchOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { TextArea } from "../src/components";
import React from "react";

const meta: Meta<typeof TextArea> = {
  title: "Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A field that allows users to write multiple lines of text. Text area includes a label and a field that users can type into. It can also come with helper text.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const TextAreaStory = {
  render: () => (
    <>
      <div>
        <TextArea label="Description" placeholder="Enter text..." rows={8} />
        <div>
          <br />
        </div>
        <TextArea
          placeholder="Enter text..."
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </div>
    </>
  ),

  name: "Text area",
  parameters: {
    docs: {
      description: {
        story: "For multi-line input.",
      },
    },
  },
};
