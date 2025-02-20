import React from "react";

export type buttonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  background: string;
  type?: "submit" | "reset" | "button" | undefined;
};
