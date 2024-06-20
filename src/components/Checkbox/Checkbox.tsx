import React from "react";
import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CheckboxStyles: any = {};

export const Checkbox = (props: AntCheckboxProps) => {
  const classes: any = props?.className
    ? `${styles.iki_checkbox} ${props?.className}`
    : styles.iki_checkbox;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Checkbox: CheckboxStyles },
      }}
    >
      <AntCheckbox {...props} className={classes} />
    </ConfigProvider>
  );
};
