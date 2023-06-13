import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactElement,
  useCallback,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: any;
  title: string;
  placeholder?: string;
  inBox?: ReactElement | string;
  errortext?: string;
  optionList:any;
}

export function DropdownIcon({
  inBox,
  value,
  onChange,
  placeholder,
  errortext,
  optionList
}: Props): ReactElement {
  const handleOnChange = useCallback(
    (event: any) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <div className="dropdown-icon">
      {placeholder && 
      <label className="dropdown-icon-label">{placeholder}</label>
      }
      <div className="dropdown-icon-container">
        {inBox &&
          <div className="in-box">{inBox}</div>
        }

        <div className="form-group select-container">
          <select placeholder={placeholder} value={value} onChange={handleOnChange} className="form-control" id="exampleFormControlSelect1">


              {optionList && optionList.map((item : string) => {
                    return (
                      <option>{item}</option>
                      )
                    })}
          </select>
        </div>
      </div>
      {errortext &&
        <span className="dropdown-icon-error">
          {errortext}
        </span>
      }
    </div>
  );
}
export default memo(DropdownIcon);
