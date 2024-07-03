import React from "react";
import {
  Input as AntInput,
  InputProps as AntInputProps,
  ConfigProvider,
} from "antd";
//import CompoundedComponent from "antd/lib/input/TextArea";
import { default as AntTextArea } from "antd/lib/input/TextArea";
import styles from "./TextArea.module.css";
import classNames from "classnames/bind";
import lightTheme from "../../styles/lightAntdTheme";
let cx = classNames.bind(styles);

interface TextfieldProps extends AntInputProps {
  label?: string;
  required?: boolean;
  helperText?: string;
}

//const { TextArea }: TextfieldProps | any = AntInput;

const InputStyles: any = {
  colorBorder: "#d9d9d9",
  hoverBorderColor: "#10181B",
  activeShadow: "0 0 0 0 transparent",
  borderRadius: "4px",
  controlHeight: "32",
  colorTextPlaceholder: "#637282",
};

export const TextArea = (props: TextfieldProps | any) => {
  const classes: any = props?.className
    ? `${styles.iki_textarea} ${props?.className}`
    : styles.iki_textarea;
  return (
    <div className={styles.iki_textarea_wrapper}>
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
        <AntTextArea {...props} className={classes} />
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

export default TextArea;
