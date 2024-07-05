import React from "react";
import {
  Space as AntSpace,
  SpaceProps as AntSpaceProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Space.module.css";

const SpaceStyles: any = {};

export const Space = (props: AntSpaceProps) => {
  const classes: any = props?.className
    ? `${styles.iki_space} ${props?.className}`
    : styles.iki_space;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          //motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Space: SpaceStyles },
      }}
    >
      <AntSpace {...props} className={classes}>
        {props?.children}
      </AntSpace>
    </ConfigProvider>
  );
};

export default Space;
