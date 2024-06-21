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

const RadioStyles: any = {
  colorPrimary: lightTheme?.colorTextBase,
  colorText: lightTheme?.colorTextBase,
  buttonSolidCheckedBg: lightTheme?.radioActiveButtonBg,
  buttonSolidCheckedHoverBg: lightTheme?.radioActiveButtonBg,
  buttonSolidCheckedActiveBg: lightTheme?.radioActiveButtonBg,
  buttonSolidCheckedColor: lightTheme?.colorTextBase,
  //colorBorder: lightTheme?.colorTextBase,
};

export const Radio = (props: RadioProps) => {
  const classes: any = cx(props?.className, {
    iki_radio_button: props?.isButton,
    iki_radio: !props?.isButton,
    is_checked: props?.isButton && props?.checked,
  });

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
