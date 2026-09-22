import * as React from 'react';
export interface MailProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "den-mndenisova@yandex.ru". */
  text1?: string;
}
export declare const Mail: React.FC<MailProps>;
export default Mail;
