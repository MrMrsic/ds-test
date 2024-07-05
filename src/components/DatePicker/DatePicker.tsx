import React from "react";
import {
  DatePicker as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
  ConfigProvider,
} from "antd";
import styles from "./DatePicker.module.css";
import classNames from "classnames/bind";
import lightTheme from "../../styles/lightAntdTheme";
let cx = classNames.bind(styles);

interface DatePickerProps extends AntDatePickerProps {
  label?: string;
  required?: boolean;
  helperText?: string;
}

const DatePickerStyles: any = {
  colorBorder: "#d9d9d9", // E3E9EF
  hoverBorderColor: "#10181B",
  activeShadow: "0 0 0 0 transparent",
  borderRadius: "4px",
  controlHeight: "32",
  colorTextPlaceholder: "#637282",
};

export const DatePicker = (props: DatePickerProps) => {
  const classes: any = props?.className
    ? `${styles.iki_datepicker} ${props?.className}`
    : styles.iki_datepicker;
  return (
    <div className={styles.iki_datepicker_wrapper}>
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
          components: { DatePicker: DatePickerStyles },
        }}
      >
        <AntDatePicker {...props} className={classes} />
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

export default DatePicker;
