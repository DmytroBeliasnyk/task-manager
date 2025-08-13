import type {JSX} from "react";
import clsx from "clsx/lite";

type ButtonProps = {
  text: string
  clickHandler: () => void
}

export const Button: (props: ButtonProps) => JSX.Element = (props: ButtonProps): JSX.Element => {
  const buttonClass: string = clsx(
    'py-2 px-4 rounded-md bg-highlight-bg outline-none cursor-pointer',
    'font-xl font-semibold text-text-secondary',
    'focus:bg-focus-bg hover:bg-focus-bg'
  )

  return (
    <button
      className={buttonClass}
      onClick={props.clickHandler}
    >{props.text}</button>
  )
}