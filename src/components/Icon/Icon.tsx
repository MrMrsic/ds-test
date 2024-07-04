import React from "react";
import { default as AntIcon } from "@ant-design/icons";
import type { GetProps } from "antd";
import styles from "./Icon.module.css";

type CustomIconComponentProps = GetProps<typeof AntIcon>;

export const Icon = (props: CustomIconComponentProps) => {
  const classes: any = props?.className
    ? `${styles.iki_icon} ${props?.className}`
    : styles.iki_icon;
  return <AntIcon {...props} className={classes} />;
};

export default Icon;
