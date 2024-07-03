import React from "react";
import {
  Select as AntSelect,
  SelectProps as AntSelectProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Select.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

interface SelectProps extends AntSelectProps {
  label?: string;
  required?: boolean;
  helperText?: string;
}

const SelectStyles: any = {
  controlHeight: 32,
  controlHeightSM: 24,
  controlHeightLG: 40,
  optionSelectedBg: "#F5F7F8",
  optionSelectedColor: "#10181B",
};

export const Select = (props: SelectProps) => {
  const classes: any = props?.className
    ? `${styles.iki_select} ${props?.className}`
    : styles.iki_select;
  return (
    <div className={styles.iki_select_wrapper}>
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
          components: { Select: SelectStyles },
        }}
      >
        <AntSelect
          {...props}
          className={classes}
          suffixIcon={
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20px"
              height="20px"
            >
              <path
                d="M10.5303 12.5303L10 12L9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303ZM10 10.9393L6.53033 7.46967C6.23744 7.17678 5.76256 7.17678 5.46967 7.46967C5.17678 7.76256 5.17678 8.23744 5.46967 8.53033L9.46967 12.5303L10 12L10.5303 12.5303L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L10 10.9393Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          }
        />
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
      </ConfigProvider>
    </div>
  );
};

export default Select;
