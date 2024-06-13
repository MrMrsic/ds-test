import React from "react";
import "monday-ui-react-core/tokens";
import { ThemeProvider, Button as VibeButton } from "monday-ui-react-core";
//import './button.css';
//import styles from "./Button.module.css";
//import classNames from "classnames/bind";
//let cx = classNames.bind(styles);

/**
 * Primary UI component for user interaction
 */
export const Button = ({ kind, size, label, ...props }: any) => {
  return (
    <ThemeProvider>
      <VibeButton kind={VibeButton.kinds[kind]} size={VibeButton.sizes[size]}>
        {label}
      </VibeButton>
    </ThemeProvider>
  );
};
