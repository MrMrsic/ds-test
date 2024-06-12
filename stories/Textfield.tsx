import React from "react";
import { TextField } from "monday-ui-react-core";
import styles from "./Textfield.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

export interface TextfieldProps {
  iconName: any;
  placeholder: string;
  showCharCount: boolean;
  title: string;
  helperText: string;
  wrapperClassName: string;
}

const defaultProps = {
  placeholder: "Placeholder text here",
  title: "Name",
};

export const Textfield = (props: TextfieldProps) => {
  return (
    <TextField
      placeholder={props.placeholder}
      showCharCount={props.showCharCount}
      title={props.title}
      validation={{
        text: props.helperText,
      }}
      wrapperClassName={props.wrapperClassName}
      className={styles.textfield}
    />
  );
};

Textfield.defaultProps = defaultProps;
