import {
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import Button from "react-bootstrap/Button";

import classes from "./ActionButton.module.css";

type ActionButtonProps = {
  size?: any;
  variant?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
};

const ActionButton = (props: ActionButtonProps) => {
  return (
    <Button
      className={classes.actionButton}
      size={props.size || "sm"}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ActionButton;
