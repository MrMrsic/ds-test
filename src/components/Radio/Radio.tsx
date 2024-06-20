import React from "react";
import {
  Radio as AntRadio,
  RadioProps as AntRadioProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Radio.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

interface RadioProps extends AntRadioProps {
  isButton?: boolean;
}

const RadioStyles: any = {};

export const Radio = (props: RadioProps) => {
  let classes: any = "";

  if (props?.isButton) {
    classes = props?.className
      ? `${styles.iki_radio_button} ${props?.className}`
      : styles.iki_radio_button;
  } else {
    classes = props?.className
      ? `${styles.iki_radio} ${props?.className}`
      : styles.iki_radio;
  }
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          motion: false,
          fontFamily: "Inter, sans-serif",
          ...lightTheme,
        },
        components: { Radio: RadioStyles },
      }}
    >
      {props?.isButton ? (
        <AntRadio.Button {...props} className={classes} />
      ) : (
        <AntRadio {...props} className={classes} />
      )}
    </ConfigProvider>
  );
};
