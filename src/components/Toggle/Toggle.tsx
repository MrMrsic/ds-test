import React from "react";
import {
  Switch as AntSwitch,
  SwitchProps as AntSwitchProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Toggle.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

interface ToggleProps extends AntSwitchProps {
  label?: string;
  labelPosition?: "top" | "left" | "right";
  helperText?: string;
}

const TooggleStyles: any = {
  colorPrimary: "#414D5A",
};

export const Toggle = (props: ToggleProps) => {
  const classes: any = props?.className
    ? `${styles.iki_toggle} ${props?.className}`
    : styles.iki_toggle;
  return (
    <div
      className={cx(styles.iki_toggle_wrapper, {
        hasTopLabel: props?.label && props?.labelPosition === "top",
      })}
    >
      <ConfigProvider
        wave={{ disabled: true }}
        theme={{
          token: {
            //motion: false,
            fontFamily: "Inter, sans-serif",
            ...lightTheme,
          },
          components: { Switch: TooggleStyles },
        }}
      >
        {props?.label &&
          (props?.labelPosition === "left" ||
            props?.labelPosition === "top") && (
            <span
              className={cx(styles.label, {
                top: props?.labelPosition === "top",
                left: props?.labelPosition === "left",
              })}
            >
              {props?.label}
            </span>
          )}
        <AntSwitch {...props} className={classes} />
        {props?.label && props?.labelPosition === "right" && (
          <span
            className={cx(styles.label, {
              right: props?.labelPosition === "right",
            })}
          >
            {props?.label}
          </span>
        )}
      </ConfigProvider>
    </div>
  );
};

export default Toggle;
