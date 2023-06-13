import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value?: any;
    title: string;
    placeholder: string;
    type: string;
    disabled?:boolean;
    errortext?:string;
    border?: "green" | "gray";
    name?:string;
}

export function InputTextLabel({value, onChange, title, placeholder, type, border , errortext , disabled , name }: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    return (
        <div className="input-text-label">
            <div className="input-text-label-title">
                <h6 className="input-text-label-title-text">
                    {title}
                </h6>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleOnChange}
                name={name}
                disabled={disabled ? true : false }
                className={ border === "gray" ? "input-text-label-input-gray" : "input-text-label-input-green"}
                value={value}
            />
            <span className="input-text-label-error">
        {errortext}
      </span>
        </div>
    )
}
export default memo(InputTextLabel);