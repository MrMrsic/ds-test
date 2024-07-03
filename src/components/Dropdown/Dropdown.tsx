import React from "react";
import {
  Dropdown as AntDropdown,
  DropdownProps as AntDropdownProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Dropdown.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const DropdownStyles: any = {};

export const Dropdown = (props: AntDropdownProps) => {
  const classes: any = props?.className
    ? `${styles.iki_tooltip} ${props?.className}`
    : styles.iki_tooltip;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          //motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Dropdown: DropdownStyles },
      }}
    >
      <AntDropdown {...props} className={classes}>
        {props?.children}
      </AntDropdown>
    </ConfigProvider>
  );
};

export default Dropdown;
