import React from "react";
import {
  InputNumber as AntInputNumber,
  InputNumberProps as AntInputNumberProps,
  ConfigProvider,
} from "antd";
import styles from "./TextField.module.css";
import classNames from "classnames/bind";
import lightTheme from "../../styles/lightAntdTheme";
let cx = classNames.bind(styles);

interface InputNumberProps extends AntInputNumberProps {
  label?: string;
  required?: boolean;
  helperText?: string;
}

const InputNumberStyles: any = {
  colorBorder: "#d9d9d9", // E3E9EF
  hoverBorderColor: "#10181B",
  activeShadow: "0 0 0 0 transparent",
  borderRadius: "4px",
  controlHeight: "32",
  colorTextPlaceholder: "#637282",
};

export const InputNumber = (props: InputNumberProps) => {
  const classes: any = props?.className
    ? `${styles.iki_textfield} ${props?.className}`
    : styles.iki_textfield;
  return (
    <div className={styles.iki_textfield_wrapper}>
      {props?.label && (
        <div className={styles.label_holder}>
          <span className={cx(styles.label, { is_required: props?.required })}>
            {props?.label}
          </span>
        </div>
      )}
      <ConfigProvider
        wave={{ disabled: true }}
        theme={{
          token: {
            motion: false,
            fontFamily: "Inter, sans-serif",
            ...lightTheme,
          },
          components: { InputNumber: InputNumberStyles },
        }}
      >
        <AntInputNumber {...props} className={classes} />
      </ConfigProvider>
      {props?.helperText && (
        <div className={styles.helperText_holder}>
          <span
            className={cx(styles.helperText, {
              is_error: props?.status === "error",
            })}
          >
            {props?.helperText}
          </span>
        </div>
      )}
    </div>
  );
};
