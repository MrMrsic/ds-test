import React from "react";
import {
  Alert as AntAlert,
  AlertProps as AntAlertProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Alert.module.css";

const AlertStyles: any = {
  colorInfo: "rgb(99, 114, 130)",
  colorInfoBg: "rgb(245, 247, 248)",
  colorInfoBorder: "rgba(16, 24, 27, 0.1)",
};

export const Alert = (props: AntAlertProps) => {
  const classes: any = props?.className
    ? `${styles.iki_alert} ${props?.className}`
    : styles.iki_alert;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          //motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Alert: AlertStyles },
      }}
    >
      <AntAlert {...props} className={classes} />
    </ConfigProvider>
  );
};

export default Alert;
