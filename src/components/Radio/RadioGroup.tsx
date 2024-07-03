import React from "react";
import {
  Radio as AntRadio,
  RadioGroupProps as AntRadioGroupProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Radio.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

interface RadioGroupProps extends AntRadioGroupProps {
  label?: string;
  required?: boolean;
  withBorder?: boolean;
}

const RadioGroupStyles: any = {
  buttonSolidCheckedBg: lightTheme?.colorTextBase,
  buttonSolidCheckedHoverBg: "#414d5a",
  buttonSolidCheckedActiveBg: lightTheme?.colorTextBase,
  colorPrimaryBorder: lightTheme?.colorTextBase,
  colorText: lightTheme?.colorTextBase,
  buttonColor: lightTheme?.colorTextBase,
  colorPrimary: lightTheme?.colorTextBase,
  colorPrimaryHover: "#414d5a",
  //colorBorder: lightTheme?.colorTextBase,
};

export const RadioGroup = (props: RadioGroupProps) => {
  const classes: any = props?.className
    ? `${styles.iki_radio_group} ${props?.className}`
    : styles.iki_radio_group;

  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Radio: RadioGroupStyles },
      }}
    >
      <AntRadio.Group {...props} className={classes}>
        <>
          {props?.label && (
            <div className={styles.label_holder}>
              <span
                className={cx(styles.label, { is_required: props?.required })}
              >
                {props?.label}
              </span>
            </div>
          )}
          <div
            className={cx(styles.radios_holder, {
              bordered: props?.withBorder,
            })}
          >
            {props?.children}
          </div>
        </>
      </AntRadio.Group>
    </ConfigProvider>
  );
};

export default RadioGroup;
