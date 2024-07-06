import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 48px;
`;

function InputSlider(props) {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
      setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = (value) => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            style={{ color: "#609CF7" }}         
            min={props.min}
            max={props.max}
            step={props.step}          
          />
        </Grid>
        <Grid item>
            <Input
                style={{color: "white"}}          
                value={value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                step: props.step,
                min: 0,
                max: props.max,
                type: 'number',
                'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InputSlider;