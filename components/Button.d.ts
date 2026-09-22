import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "variant5" | "variant3" | "variant4";
  /** Text content; defaults to "Скачать CV". */
  text1?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
