import React from "react";
import {
  TimePicker as AntTimePicker,
  TimePickerProps as AntTimePickerProps,
  ConfigProvider,
} from "antd";
import styles from "./TimePicker.module.css";
import classNames from "classnames/bind";
import lightTheme from "../../styles/lightAntdTheme";
let cx = classNames.bind(styles);

interface TimePickerProps extends AntTimePickerProps {
  label?: string;
  required?: boolean;
  helperText?: string;
}

const TimePickerStyles: any = {
  colorBorder: "#d9d9d9", // E3E9EF
  hoverBorderColor: "#10181B",
  activeShadow: "0 0 0 0 transparent",
  borderRadius: "4px",
  controlHeight: "32",
  colorTextPlaceholder: "#637282",
};

export const TimePicker = (props: TimePickerProps) => {
  const classes: any = props?.className
    ? `${styles.iki_timepicker} ${props?.className}`
    : styles.iki_timepicker;
  return (
    <div className={styles.iki_timepicker_wrapper}>
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
          components: { DatePicker: TimePickerStyles },
        }}
      >
        <AntTimePicker {...props} className={classes} />
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

export default TimePicker;
