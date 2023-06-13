import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactElement,
  useCallback,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: any;
  placeholder?: string;
  type: string;
  inBox?: ReactElement | string;
  errortext?:string;
  disabled?:boolean
}

export function InputIcon({
  inBox,
  value,
  onChange,
  placeholder,
  type,
  errortext,
  disabled
}: Props): ReactElement {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <div className="input-icon">
     {placeholder &&  <label className="input-icon-label">{placeholder}</label>}
      <div className="input-icon-container">
        {inBox && 
        <div className="in-box">{inBox }</div>
        }
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleOnChange}
          className="input"
          value={value}
          disabled={disabled}
        />
      </div>
      {errortext && 
      <span className="input-icon-error">
        {errortext}
      </span>
      }
    </div>
  );
}
export default memo(InputIcon);
