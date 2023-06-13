import {
  HTMLAttributes,
  memo,
  ReactElement,
} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  value?: string;
  icon?: ReactElement;
  handleGetValue?: any;
}

export function TextAreaLabel({
  title,
  handleGetValue,
  value,
}: Props): ReactElement {
  return (
    <div className="textarea">
      <label className="textarea-label">{title}</label>
      <textarea
          className="textarea-input"
          placeholder={title}
          value={value}
          onChange={handleGetValue}
        ></textarea>
    </div>
  );
}
export default memo(TextAreaLabel);
