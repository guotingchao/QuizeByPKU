//style
import "./index.css";

import { Spin } from "@components/Spin";
import classNames from "classnames";
import { composeRef } from "rc-util/lib/ref";
import React, {
  ButtonHTMLAttributes,
  createRef,
  forwardRef,
  ReactNode,
  Ref,
  useMemo
} from "react";

const ButtonTypes = ["default", "primary", "dashed", "link", "text"] as const;
const ButtonShapes = ["default", "circle", "round"] as const;
const ButtonSizes = ["small", "middle", "large"] as const;
const ButtonHtmlType = ["button", "submit", "reset"] as const;

type ButtonShape = (typeof ButtonShapes)[number];
type ButtonType = (typeof ButtonTypes)[number];
type ButtonSizes = (typeof ButtonSizes)[number];
type LegacyBttonTypes = (typeof ButtonHtmlType)[number];

type BaseButtonProps = {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSizes;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  className?: string;
  fullWidth?: boolean;
  children?: ReactNode;
};

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> & ButtonHTMLAttributes<HTMLElement>,
  "type"
>;

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
  href?: string;
  htmlType?: LegacyBttonTypes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      disabled,
      htmlType = "button",
      className = "",
      children,
      loading = false,
      size = "medium",
      ...rest
    } = props;
    const classes = classNames(className, {
      btn: true,
      small: size === "small",
      medium: size === "medium",
      large: size === "large",
      disabled: disabled
    });
    const innerRef = createRef<HTMLButtonElement>();

    const buttonRef = composeRef(ref, innerRef);
    //MARK 进行loading状态的处理 和 其他type shape等不同的更加丰富变化处理
    const additionalRender = useMemo(() => {
      if (loading) {
        return <Spin isLoading tips="加载中" />;
      }
      return children;
    }, [loading, children]);
    return (
      <button
        {...rest}
        ref={buttonRef as Ref<HTMLButtonElement>}
        type={htmlType}
        className={classes}
        disabled={disabled}
      >
        {additionalRender}
      </button>
    );
  }
);

export default Button;
