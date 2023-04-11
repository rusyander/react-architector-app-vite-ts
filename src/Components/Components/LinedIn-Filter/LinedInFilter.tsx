import React from 'react';

import './linedInFilter.css';
import InputCheckbox from '../../UI/Input-Checkbox/InputCheckbox';
import P from '../../UI/P/P';
import GreenText from '../../UI/GreenText/GreenText';

interface LinedInFilterProps {
  returnData: (data: ChecketData) => void;
  setGreen?: boolean;
  category: string;
}
export interface ChecketData {
  text: string;
  check: boolean;
}

export default function LinedInFilter({
  returnData,
  setGreen,
  category,
}: LinedInFilterProps) {
  const [checked, setChecked] = React.useState(false);
  const handleOnChange = () => {
    const checkData = {
      text: category,
      check: checked,
    };
    returnData(checkData);
  };
  return (
    <div
      className="LinedInFilterMain"
      role="presentation"
      onClick={handleOnChange}
    >
      <div className="LinedInFilterMainCheck">
        <InputCheckbox checkeds={checked} setChecked={setChecked} />
      </div>
      {setGreen === false ? (
        <P size="small" className="LinedInFilterMainText" weight="standart">
          {category}
        </P>
      ) : (
        <GreenText
          size="small"
          className="LinedInFilterMainText"
          weight="standart"
        >
          {category}
        </GreenText>
      )}
    </div>
  );
}

LinedInFilter.defaultProps = {
  setGreen: false,
};
