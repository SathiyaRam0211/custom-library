import { ReactElement } from "react";
import { Button } from "../../utils/util-styles";

const CustomButton = ({
  text,
  theme,
  child,
}: {
  text: string;
  theme: string;
  child?: ReactElement;
}) => {
  return (
    <Button $theme={theme}>
      {text} {child}
    </Button>
  );
};

export default CustomButton;
