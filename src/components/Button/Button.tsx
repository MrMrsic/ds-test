import React from "react";
import { Button as AntButton, ButtonProps, ConfigProvider } from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Button.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ButtonStyles: any = {
  colorPrimary: "#7822ff",
  //colorPrimaryHover: "#10181B",
  //colorPrimaryActive: "#10181B",
  //colorPrimaryBorder: "#7822ff",
  defaultBorderColor: "#E3E9EF",
  defaultHoverBorderColor: "#10181B",
  defaultHoverColor: "#10181B",
  borderRadius: 4,
  borderRadiusSM: 4,
  borderRadiusLG: 4,
  controlHeight: 32,
  controlHeightSM: 24,
  controlHeightLG: 40,
  paddingBlock: 2,
  //primaryShadow: "none",
};

export const Button = (props: ButtonProps) => {
  const classes: any = props?.className
    ? `${styles.iki_btn} ${props?.className}`
    : styles.iki_btn;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Button: ButtonStyles },
      }}
    >
      <AntButton {...props} className={classes}>
        {props?.children}
      </AntButton>
    </ConfigProvider>
  );
};
