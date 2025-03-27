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

export default function Button({
  kind = "secondary",
  children,
  ...args
}: ButtonProps) {
  if (kind === "delete")
    return (
      <button type="button" {...args} className={style[kind]}>
        <Icon icon="rubbish" size={18} />
      </button>
    );

  return (
    <button type="button" {...args} className={style[kind]}>
      {children}
    </button>
  );
}
