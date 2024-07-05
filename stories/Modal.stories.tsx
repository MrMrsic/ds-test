import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../src/components/Modal/Modal";
import { Button } from "../src/components";

import React, { Children, useState } from "react";
import { Space } from "antd";

const meta: Meta<typeof Modal> = {
  title: "Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Modal allows the user to focus on one task or a piece of information, by popping-up and blocking the page content until the modal task is completed, or until the user dismisses the action. Use modal for short and non-frequent tasks. For common tasks consider using the main flow.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Sizes = {
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      console.log("handleOk!");
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          className="test-class"
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          size="md"
          okText="Submit"
          cancelText="Cancel"
          footer={(_, { OkBtn, CancelBtn }) => (
            <>
              <Button>Custom Button</Button>
              <CancelBtn />
              <OkBtn />
            </>
          )}
          okButtonProps={{ size: "large" }}
          cancelButtonProps={{ size: "large" }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  },

  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
