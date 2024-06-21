import React from "react";
import {
  Popover as AntPopover,
  PopoverProps as AntPopoverProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Popover.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PopoverStyles: any = {};

export const Popover = (props: AntPopoverProps) => {
  const classes: any = props?.className
    ? `${styles.iki_popover} ${props?.className}`
    : styles.iki_popover;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          //motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Popover: PopoverStyles },
      }}
    >
      <AntPopover {...props} className={classes}>
        {props?.children}
      </AntPopover>
    </ConfigProvider>
  );
};
