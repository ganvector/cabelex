import Button from "react-bootstrap/Button";

import classes from "./ActionButton.module.css";

const ActionButton = (props: any) => {
  return (
    <Button
      className={classes.actionButton}
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ActionButton;
