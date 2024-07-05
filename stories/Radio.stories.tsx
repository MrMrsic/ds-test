import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup, Icon } from "../src/components";
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

export const GroupWithLabel = {
  render: () => {
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
      setValue(e.target.value);
    };
    return (
      <>
        <RadioGroup onChange={onChange} value={value} label="Type" withBorder>
          <Space direction="vertical">
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Space>
        </RadioGroup>
      </>
    );
  },

  name: "Group with label",
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
              defaultValue={"London"}
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

export const GroupIconButtons = {
  render: () => {
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
      setValue(e.target.value);
    };

    const GridIcon = () => (
      <svg
        className="menu-item-svgIcon"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.97255 0C7.31393 0.116214 7.64493 0.260943 7.96205 0.432655C8.62706 0.863306 8.89546 1.53232 8.90147 2.30148C8.91349 3.73565 8.91349 5.16916 8.90147 6.60199C8.90147 7.54342 8.47883 8.27052 7.61753 8.67313C7.29125 8.81438 6.9395 8.88732 6.58396 8.88745C5.16782 8.91149 3.74967 8.90347 2.33353 8.88745C1.14974 8.88745 0.3305 8.22445 0.0480728 7.0727C0.033919 7.0365 0.0178726 7.00106 0 6.96654C0 5.29201 0 3.61681 0 1.94094C0.0220333 1.89487 0.0400606 1.8488 0.0520788 1.80273C0.186282 1.2559 0.426646 0.763155 0.917388 0.460697C1.24946 0.283401 1.59348 0.129462 1.94695 0L6.97255 0Z" />
        <path d="M0 13.0377C0.132234 12.685 0.293706 12.344 0.482731 12.0182C0.662338 11.7466 0.90758 11.5247 1.19574 11.3731C1.4839 11.2215 1.80567 11.1451 2.13123 11.1509C3.65754 11.1349 5.18184 11.1409 6.70815 11.1509C7.00228 11.1508 7.29345 11.2096 7.56449 11.3238C7.83553 11.438 8.08096 11.6053 8.28631 11.8159C8.49166 12.0265 8.65277 12.2761 8.76014 12.5499C8.86751 12.8237 8.91897 13.1163 8.91149 13.4103C8.9215 14.8605 8.92951 16.3127 8.91149 17.7629C8.89346 19.0629 8.01212 19.9843 6.72017 20.0143C5.2199 20.0483 3.71562 20.0463 2.21736 20.0143C1.09566 19.9863 0.340515 19.3353 0.0540818 18.2516C0.0420637 18.2036 0.0220333 18.1595 0 18.1154C0 16.4222 0 14.7296 0 13.0377Z" />
        <path d="M18.0719 0C18.4781 0.0830816 18.8615 0.253241 19.1956 0.498755C19.4342 0.678993 19.6298 0.909926 19.7684 1.1749C19.9069 1.43988 19.9849 1.7323 19.9968 2.03107C20.0249 3.26494 20.0148 4.50081 20.0188 5.73668C20.0188 6.05116 20.0188 6.36764 20.0188 6.68211C20.0184 6.97905 19.9585 7.27288 19.8425 7.54622C19.7265 7.81955 19.5568 8.06683 19.3435 8.2734C19.1302 8.47998 18.8776 8.64165 18.6007 8.74884C18.3238 8.85604 18.0282 8.90658 17.7314 8.89746C16.2972 8.89746 14.863 8.90948 13.4289 8.89746C12.1229 8.88144 11.1895 8.01212 11.1574 6.72418C11.1194 5.20788 11.1234 3.68958 11.1574 2.17329C11.1795 1.06762 11.8525 0.308467 12.9341 0.0440667C12.9718 0.031989 13.0086 0.0172635 13.0443 0L18.0719 0Z" />
        <path d="M20.0089 15.5756C20.0089 16.3769 20.0369 17.1781 20.0089 17.9633C19.9904 18.4964 19.7702 19.0026 19.3928 19.3797C19.0154 19.7567 18.509 19.9764 17.9758 19.9943C16.3734 20.0317 14.771 20.0317 13.1685 19.9943C12.6413 19.9738 12.1413 19.7544 11.7693 19.3802C11.3973 19.0059 11.1808 18.5047 11.1635 17.9773C11.1275 16.3748 11.1275 14.7724 11.1635 13.17C11.1794 12.6423 11.395 12.1403 11.7669 11.7655C12.1387 11.3907 12.639 11.171 13.1665 11.1509C14.769 11.1149 16.3767 11.1149 17.9898 11.1509C18.5132 11.1753 19.0087 11.3942 19.3791 11.7647C19.7496 12.1352 19.9685 12.6306 19.9929 13.154C20.0289 13.9552 19.9929 14.7564 19.9929 15.5576L20.0089 15.5756Z" />
      </svg>
    );

    const RowsIcon = () => (
      <svg
        className="menu-item-svgIcon"
        width="23"
        height="19"
        viewBox="0 0 23 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 16.7647C0 15.5297 1.07858 14.5294 2.41742 14.5294H20.5814C21.9166 14.5294 22.9988 15.5219 22.9988 16.7647C22.9988 17.9997 21.9202 19 20.5814 19H2.41742C1.08221 19 0 18.0075 0 16.7647V16.7647ZM0 8.38235C0 7.45694 0.818316 6.70588 1.80489 6.70588H21.1951C22.1914 6.70588 23 7.45024 23 8.38235C23 9.30776 22.1817 10.0588 21.1951 10.0588H1.80489C0.808632 10.0588 0 9.31447 0 8.38235V8.38235ZM0 1.11765C0 0.500706 0.545947 0 1.20447 0H21.7955C22.4601 0 23 0.496235 23 1.11765C23 1.73459 22.4541 2.23529 21.7955 2.23529H1.20447C0.539895 2.23529 0 1.73906 0 1.11765V1.11765Z" />
      </svg>
    );
    return (
      <>
        <Space direction="vertical" size="middle">
          <Space.Compact>
            <RadioGroup
              onChange={onChange}
              defaultValue={2}
              value={value}
              buttonStyle="solid"
            >
              <Radio value={1} isButton>
                <Icon
                  component={GridIcon}
                  //style={{ height: '14px', width: 'auto' }}
                />
              </Radio>
              <Radio value={2} isButton checked>
                <Icon
                  component={RowsIcon}
                  //style={{ height: '14px', width: 'auto' }}
                />
              </Radio>
            </RadioGroup>
          </Space.Compact>
        </Space>
      </>
    );
  },

  name: "Group as Icon Buttons",
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
