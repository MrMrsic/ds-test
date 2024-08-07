import React from "react";
import {
  Input as AntInput,
  InputProps as AntInputProps,
  ConfigProvider,
} from "antd";
import styles from "./TextField.module.css";
import classNames from "classnames/bind";
import lightTheme from "../../styles/lightAntdTheme";
let cx = classNames.bind(styles);

interface TextfieldProps extends AntInputProps {
  label?: string;
  required?: boolean;
  helperText?: string;
  fullwidth?: boolean;
  badgeIcon?: any;
}

const InputStyles: any = {
  colorBorder: "#d9d9d9", // E3E9EF
  hoverBorderColor: "#10181B",
  activeShadow: "0 0 0 0 transparent",
  borderRadius: "4px",
  controlHeight: "32",
  colorTextPlaceholder: "#637282",
};

export const TextField = (props: TextfieldProps) => {
  const classes: any = props?.className
    ? `${styles.iki_textfield} ${props?.className}`
    : styles.iki_textfield;
  return (
    <div
      className={cx(styles.iki_textfield_wrapper, {
        fullwidth: props?.fullwidth,
      })}
    >
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
      {props?.badgeIcon && (
        <span
          className={cx(styles.badgeIcon_holder, {
            move_up: props?.helperText,
          })}
        >
          {props?.badgeIcon}
        </span>
      )}
    </div>
  );
};

export default TextField;
