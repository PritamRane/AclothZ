import React from "react";
import { CustomeButtonContainer } from "./custom-button.style";

export const CustomButton = ({ children, ...props }) => {
  return <CustomeButtonContainer className="custom-button" {...props}>{children}</CustomeButtonContainer>;
}

export default CustomButton;