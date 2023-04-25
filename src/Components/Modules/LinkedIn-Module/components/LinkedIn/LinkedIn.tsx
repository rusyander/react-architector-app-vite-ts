import React from 'react';
import './linkedIn.css';

import LinkedInIcons from '../../../../../assets/images/logo.png';
import LinedInFilter, {
  ChecketData,
} from '../../../../Components/LinkedIn-Filter/LinkedInFilter';

export default function LinkedIn() {
  const [returnId2, setReturnId2] = React.useState<ChecketData>({
    text: '',
    check: false,
  });

  return (
    <div className="LinkedInMains">
      <img src={LinkedInIcons} alt="icon" />

      <div className="LinkedInMainsContents">
        <div>
          <LinedInFilter category="About" returnData={setReturnId2} />
          <LinedInFilter category="Accesibility " returnData={setReturnId2} />
          <LinedInFilter category="Help Center" returnData={setReturnId2} />
          <LinedInFilter category="Privacy & Terms" returnData={setReturnId2} />
        </div>

        <div>
          <LinedInFilter category="Advertising " returnData={setReturnId2} />
          <LinedInFilter
            category="Business Services"
            returnData={setReturnId2}
          />
          <LinedInFilter category="Download Apps" returnData={setReturnId2} />
          <LinedInFilter category="More" setGreen returnData={setReturnId2} />
        </div>
      </div>
    </div>
  );
}
