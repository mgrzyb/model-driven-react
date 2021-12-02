import * as React from "react";
import { observer } from "mobx-react";
import { ButtonHTMLAttributes } from "react";
import { ICommand } from "./Command";

export const Button = observer((props : ButtonHTMLAttributes<HTMLButtonElement> & { command : ICommand }) => {
  const { command, onClick, disabled, ...rest } = props;
  return (
    <button
      onClick={e => {
        onClick?.(e);
        command?.();
      }}
      disabled={disabled || command?.enabled === false}
      {...rest}
    >
      {props.children}
    </button>
  );
});