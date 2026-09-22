import * as React from 'react';
export interface TgProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Телеграм". */
  text1?: string;
}
export declare const Tg: React.FC<TgProps>;
export default Tg;
