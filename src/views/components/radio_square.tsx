import React, { memo, useCallback, useState } from "react";
interface Props {
  title?: string;
  getActive(status: boolean): void;
  onClick?: () => void;
  isActive?: boolean;
}
const RadioSquare = ({ title, getActive, onClick, isActive }: Props) => {

  const [active, setActive] = useState(isActive);

  const activeRadio = useCallback(() => {
    setActive(!active);
    getActive(!active);
    onClick && onClick()
  }, [active]);

  return (
    <div className="check-box">
      <div className="square-radio">
        <div className={isActive === true ? "square-radio-active" : "square-radio"} onClick={activeRadio}></div>
      </div>
      <div className="smalText ">{title}</div>
    </div>
  );
};

export default memo(RadioSquare);
