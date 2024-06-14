import React from "react";
import { TextField } from "monday-ui-react-core";
import styles from "./Textfield.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

export const BASE_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type TextFieldSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];

export enum TextFieldTextType {
  TEXT = "text",
  PASSWORD = "password",
  SEARCH = "search",
  DATE = "date",
  DATE_TIME = "datetime-local",
  NUMBER = "number",
  TEL = "tel",
  URL = "url",
  EMAIL = "email",
}

export interface TextfieldProps {
  className?: string;
  "data-testid"?: string;
  id?: string;
  placeholder?: string;
  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
  autoComplete?: string;
  value?: string;
  onChange?: (value: string, event: Pick<React.ChangeEvent, "target">) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onWheel?: (event: React.WheelEvent) => void;
  debounceRate?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  setRef?: (node: HTMLElement) => void;
  iconName?: string | React.FunctionComponent | null;
  secondaryIconName?: string | React.FunctionComponent | null;
  title?: string;
  /** SIZES is exposed on the component itself */
  size?: TextFieldSize; // TextFieldSize
  /** Don't provide status for plain assistant text */
  validation?: { status?: "error" | "success"; text?: string }; // TODO make common validation class?
  wrapperClassName?: string;
  onIconClick?: (icon: string | React.FunctionComponent | null) => void;
  clearOnIconClick?: boolean;
  labelIconName?: string | React.FunctionComponent | null;
  showCharCount?: boolean;
  inputAriaLabel?: string;
  searchResultsContainerId?: string;
  activeDescendant?: string;
  /**  Icon names labels for a11y */
  iconsNames?: {
    layout: string;
    primary: string;
    secondary: string;
  };
  /** TEXT_TYPES is exposed on the component itself */
  type?: TextFieldTextType; // TextFieldTextType
  maxLength?: number;
  trim?: boolean;
  /** ARIA role for container landmark */
  role?: string;
  /** adds required to the input element */
  required?: boolean;
  /** shows loading animation */
  loading?: boolean;
  /**
   * @deprecated - use "data-testid" instead
   */
  dataTestId?: string;
  requiredAsterisk?: boolean; // TODO: Deprecate in next major version.
  secondaryDataTestId?: string;
  tabIndex?: number;
  name?: string;
  underline?: boolean;
  /**
   * Apply new style for read only, use along with `readonly` prop
   */
  withReadOnlyStyle?: boolean;

  labelPosition?: "top" | "left";
}

const defaultProps: TextfieldProps = {
  className: "",
  placeholder: "",
  autoComplete: "off",
  value: "",
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onWheel: () => {},
  debounceRate: 0,
  autoFocus: false,
  disabled: false,
  readonly: false,
  setRef: () => {},
  iconName: "",
  secondaryIconName: "",
  id: "input",
  title: "",
  size: TextField.sizes.SMALL,
  validation: { status: "success", text: "" },
  wrapperClassName: styles.textField,
  onIconClick: () => {},
  clearOnIconClick: false,
  labelIconName: "",
  showCharCount: false,
  inputAriaLabel: "",
  searchResultsContainerId: "",
  activeDescendant: "",
  iconsNames: { primary: "", secondary: "", layout: "" },
  type: TextFieldTextType.TEXT,
  maxLength: 9999,
  trim: false,
  role: "",
  required: false,
  loading: false,
  requiredAsterisk: false,
  dataTestId: "",
  "data-testid": "",
  secondaryDataTestId: "",
  tabIndex: 0,
  underline: false,
  name: "",
  withReadOnlyStyle: false,
  labelPosition: "top",
};

export const Textfield = (props: TextfieldProps) => {
  return <TextField {...props} />;
};

Textfield.defaultProps = defaultProps;
