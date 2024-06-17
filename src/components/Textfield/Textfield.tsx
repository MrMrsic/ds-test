import React from "react";
import {
  Input as AntInput,
  InputProps as AntInputProps,
  ConfigProvider,
} from "antd";
import styles from "./Textfield.module.css";
import classNames from "classnames/bind";
import lightTheme from "../../styles/lightAntdTheme";
let cx = classNames.bind(styles);

interface TextfieldProps extends AntInputProps {
  label?: string;
  required?: boolean;
  helperText?: string;
}

const InputStyles: any = {
  colorBorder: "#E3E9EF",
  hoverBorderColor: "#10181B",
  activeShadow: "0 0 0 0 transparent",
  borderRadius: "4px",
  controlHeight: "32",
  colorTextPlaceholder: "#637282",
};

export const Textfield = (props: TextfieldProps) => {
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
          components: { Input: InputStyles },
        }}
      >
        <AntInput {...props} className={classes} />
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
