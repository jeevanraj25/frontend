import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const ChooseAnalytics = ({ SetType }) => {
  const handleRadioChange = (event) => {
    SetType(event.target.value);
   
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Overallcommunication"
        onChange={handleRadioChange}
      >
        <FormControlLabel value="Overallcommunication" control={<Radio />} label="Overall Communication" />
        <FormControlLabel value="grammar" control={<Radio />} label="Grammar and Vocabulary" />
        <FormControlLabel value="percentile" control={<Radio />} label="Percentile Graph" />
      </RadioGroup>
    </FormControl>
  );
};

export default ChooseAnalytics;
