import React from "react";
import { Button as AntButton, ButtonProps, ConfigProvider } from "antd";
import styles from "./Button.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ButtonStyles: any = {
  colorPrimary: "rgb(120, 34, 255)",
  colorPrimaryHover: "rgb(86, 5, 192)",
  colorPrimaryActive: "rgb(54, 0, 129)",
  colorPrimaryBorder: "rgb(54, 0, 129)",
  defaultBorderColor: "rgb(227, 233, 239)",
  borderRadius: 4,
  borderRadiusSM: 8,
  borderRadiusLG: 100,
  controlHeight: 28,
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
        token: { motion: false, fontFamily: "Inter, sans-serif" },
        components: { Button: ButtonStyles },
      }}
    >
      <AntButton {...props} className={classes}>
        {props?.children}
      </AntButton>
    </ConfigProvider>
  );
};
