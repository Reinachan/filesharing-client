import { Icon } from "components/Icon";

import style from "./Button.module.css";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface DeleteButton {
  kind: "delete";
  children?: undefined;
}

interface RegularButton {
  kind: "primary" | "secondary";
  children: ReactNode;
}

type ButtonProps = (RegularButton | DeleteButton) &
  ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Creates a button
 * @param kind - The kind of the button (default is "secondary")
 * @param children - Text that goes inside the button (should not be used if kind="delete")
 * @param ...args - Any other button properties
 * @returns A button of the specified kind
 * @example <Button kind="primary">Button</Button>
 */
export default function Button({
  kind = "secondary",
  children,
  ...args
}: ButtonProps) {
  if (kind === "delete")
    return (
      <button type="button" {...args} className={style[kind]}>
        <Icon icon="rubbish" size={11} />
      </button>
    );

  return (
    <button type="button" {...args} className={style[kind]}>
      {children}
    </button>
  );
}
